import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AmbientFabricCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry: gentle undulating fabric mesh
    const geometry = new THREE.PlaneGeometry(10, 7, 64, 64);

    // Custom shader for silk/fabric folds with Burgundy & ecru hues
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uBurgundy: { value: new THREE.Color('#6E0F1F') },
        uDarkWine: { value: new THREE.Color('#160307') },
        uEcruHighlight: { value: new THREE.Color('#F0D2D7') },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Gentle undulating silk wave
          float wave1 = sin(pos.x * 1.2 + uTime * 0.6) * 0.24;
          float wave2 = cos(pos.y * 1.4 + uTime * 0.45) * 0.20;
          float wave3 = sin((pos.x + pos.y) * 1.6 + uTime * 0.8) * 0.14;
          
          // Subtle mouse pull
          float mouseDist = distance(uv, uMouse);
          float mouseInfluence = smoothstep(0.65, 0.0, mouseDist) * 0.18;

          pos.z += wave1 + wave2 + wave3 + mouseInfluence;
          vElevation = pos.z;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uBurgundy;
        uniform vec3 uDarkWine;
        uniform vec3 uEcruHighlight;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
          // Color ramp based on elevation and subtle gradient
          float mixVal = smoothstep(-0.3, 0.4, vElevation);
          vec3 color = mix(uDarkWine, uBurgundy, mixVal);

          // Subtle sheen highlight on peaks
          float sheen = pow(smoothstep(0.12, 0.5, vElevation), 2.5) * 0.45;
          color = mix(color, uEcruHighlight, sheen);

          // Soft radial alpha vignette so it fades seamlessly into the noir canvas
          float dist = distance(vUv, vec2(0.5, 0.5));
          float alpha = smoothstep(0.8, 0.15, dist) * 0.45;

          gl_FragColor = vec4(color, alpha);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.15;
    mesh.rotation.y = 0.08;
    scene.add(mesh);

    let animationFrameId;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Mouse tracking with smooth lerp
    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetMouse.set(x, 1.0 - y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // IntersectionObserver to pause when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      if (isVisible) {
        const elapsedTime = clock.getElapsedTime();
        material.uniforms.uTime.value = elapsedTime;
        
        // Lerp mouse
        material.uniforms.uMouse.value.lerp(targetMouse, 0.05);

        renderer.render(scene, camera);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
