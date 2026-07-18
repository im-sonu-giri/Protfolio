"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeCore({ reduceMotion }: { reduceMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reduceMotion || !meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.045;
    meshRef.current.rotation.y += delta * 0.065;
  });

  return (
    <mesh ref={meshRef} scale={2.4}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#3a3a3a" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function ParticleField({ reduceMotion }: { reduceMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (reduceMotion || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#555555" size={0.02} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Scene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <WireframeCore reduceMotion={reduceMotion} />
      <ParticleField reduceMotion={reduceMotion} />
    </>
  );
}

export function HeroScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Scene reduceMotion={reduceMotion} />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
