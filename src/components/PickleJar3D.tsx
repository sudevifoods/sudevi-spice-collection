
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Mesh } from 'three';

// The actual 3D jar model
const Jar = ({ scrollY }: { scrollY: number }) => {
  const meshRef = useRef<Mesh>(null!);
  const labelTexture = useTexture('/lovable-uploads/1986c024-3df3-4866-86bc-70f25fb48ce2.png');

  // Rotate jar based on scroll position
  useFrame(() => {
    if (meshRef.current) {
      // Convert scrollY to rotation (adjust multiplier to control sensitivity)
      meshRef.current.rotation.y = scrollY * 0.002;
    }
  });

  return (
    <group>
      {/* Glass jar */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 4, 32]} />
        <meshPhysicalMaterial 
          transparent={true}
          opacity={0.6}
          roughness={0}
          clearcoat={1}
          metalness={0.1}
          color="#f0f8ff"
        />
      </mesh>

      {/* Label wrapped around jar */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.55, 1.55, 3, 64, 1, true]} />
        <meshStandardMaterial 
          map={labelTexture}
          transparent={true}
        />
      </mesh>

      {/* Jar lid */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[1.2, 1.6, 0.5, 32]} />
        <meshStandardMaterial color="#882211" />
      </mesh>
    </group>
  );
};

const PickleJar3D = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Jar scrollY={scrollY} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default PickleJar3D;
