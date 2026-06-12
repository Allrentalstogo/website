"use client";

import { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface PieceData {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  spin: THREE.Vector3;
  wobbleOffset: number;
  wobbleSpeed: number;
  startY: number;
}

function ConfettiPieces() {
  const { scene } = useGLTF("/confetti.glb");
  const piecesRef = useRef<PieceData[]>([]);
  const groupRef = useRef<THREE.Group>(null);

  // Extract individual confetti meshes, clone them, spread them out
  useMemo(() => {
    const meshes: THREE.Mesh[] = [];
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.name !== "mesh_0") {
        meshes.push(child);
      }
    });

    // Clone each piece multiple times and give them falling behavior
    const pieces: PieceData[] = [];
    const spreadX = 50;
    const spreadY = 70;
    const spreadZ = 25;

    for (let i = 0; i < 100; i++) {
      const src = meshes[i % meshes.length];
      const clone = src.clone();
      clone.material = (src.material as THREE.Material).clone();

      // Detect if it's a cylinder (serpentina) by name
      const isCylinder = src.name.includes("Object") && 
        meshes.indexOf(src) >= 9 && meshes.indexOf(src) <= 22;

      // Center geometry and ensure thickness
      clone.geometry = src.geometry.clone();
      clone.geometry.computeBoundingBox();
      if (clone.geometry.boundingBox) {
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        clone.geometry.boundingBox.getCenter(center);
        clone.geometry.boundingBox.getSize(size);
        clone.geometry.translate(-center.x, -center.y, -center.z);

        if (isCylinder) {
          // Serpentinas: make them thicker and elongated
          const minThick = 3.5;
          const scaleX = size.x < minThick ? minThick / Math.max(size.x, 0.01) : 1;
          const scaleY = size.y < 1 ? 2 / Math.max(size.y, 0.01) : 1;
          const scaleZ = size.z < minThick ? minThick / Math.max(size.z, 0.01) : 1;
          clone.geometry.scale(scaleX, scaleY, scaleZ);
        } else {
          // Regular confetti
          const minThickness = 2.4;
          const scaleX = size.x < minThickness ? minThickness / Math.max(size.x, 0.01) : 1;
          const scaleY = size.y < minThickness ? minThickness / Math.max(size.y, 0.01) : 1;
          const scaleZ = size.z < minThickness ? minThickness / Math.max(size.z, 0.01) : 1;
          clone.geometry.scale(scaleX, scaleY, scaleZ);
        }
      }

      // Make double sided with slight metallic sheen for serpentinas
      const mat = clone.material as THREE.MeshStandardMaterial;
      mat.side = THREE.DoubleSide;
      if (isCylinder) {
        mat.metalness = 0.5;
        mat.roughness = 0.3;
      } else {
        mat.metalness = 0.2;
        mat.roughness = 0.5;
      }

      // Random position spread across screen
      const startY = (Math.random() - 0.3) * spreadY;
      clone.position.set(
        (Math.random() - 0.5) * spreadX,
        startY,
        (Math.random() - 0.5) * spreadZ
      );

      // Random scale
      const s = 0.06 + Math.random() * 0.12;
      clone.scale.setScalar(s);

      // Random initial rotation
      clone.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      pieces.push({
        mesh: clone,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          -(0.005 + Math.random() * 0.015),
          0
        ),
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.03
        ),
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.5 + Math.random() * 1.5,
        startY,
      });
    }

    piecesRef.current = pieces;
    return pieces;
  }, [scene]);

  // Add pieces to group
  useEffect(() => {
    if (!groupRef.current) return;
    // Clear existing
    while (groupRef.current.children.length) {
      groupRef.current.remove(groupRef.current.children[0]);
    }
    for (const p of piecesRef.current) {
      groupRef.current.add(p.mesh);
    }
  }, []);

  // Animate falling
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (const p of piecesRef.current) {
      // Gentle fall
      p.mesh.position.y += p.velocity.y;

      // Float and drift - wider wobble like real confetti in air
      const wobbleX = Math.sin(t * p.wobbleSpeed + p.wobbleOffset) * 0.02;
      const wobbleZ = Math.cos(t * p.wobbleSpeed * 0.7 + p.wobbleOffset) * 0.008;
      p.mesh.position.x += wobbleX + p.velocity.x;
      p.mesh.position.z += wobbleZ;

      // Tumbling - varies with time for organic feel
      p.mesh.rotation.x += p.spin.x;
      p.mesh.rotation.y += p.spin.y;
      p.mesh.rotation.z += p.spin.z * (0.8 + Math.sin(t * 0.3 + p.wobbleOffset) * 0.4);

      // Reset when below
      if (p.mesh.position.y < -38) {
        p.mesh.position.y = 38 + Math.random() * 12;
        p.mesh.position.x = (Math.random() - 0.5) * 50;
        p.mesh.position.z = (Math.random() - 0.5) * 25;
      }
    }
  });

  return <group ref={groupRef} />;
}

export default function Confetti() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 35], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 2;
          scene.background = null;
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 7]} intensity={3} />
        <directionalLight position={[-3, -5, 5]} intensity={1.5} />
        <pointLight position={[8, 5, 10]} intensity={2} color="#ff69b4" />
        <pointLight position={[-8, -3, 10]} intensity={1.5} color="#60d5f7" />
        <Suspense fallback={null}>
          <ConfettiPieces />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/confetti.glb");
