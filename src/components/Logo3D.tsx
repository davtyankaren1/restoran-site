import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, Sphere, Torus } from '@react-three/drei';
import { Group, Mesh } from 'three';

const AnimatedLogo = () => {
  const logoRef = useRef<Group>(null);
  const sphereRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Background Elements */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Sphere ref={sphereRef} args={[0.3, 16, 16]} position={[-2, 1, -1]}>
          <meshStandardMaterial color="#ff4500" transparent opacity={0.3} />
        </Sphere>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
        <Torus ref={torusRef} args={[0.4, 0.1, 8, 16]} position={[2, -1, -1]}>
          <meshStandardMaterial color="#ff6347" transparent opacity={0.4} />
        </Torus>
      </Float>

      {/* Main Logo Text */}
      <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
        <group ref={logoRef}>
          <Text
            fontSize={1.2}
            position={[0, 0.3, 0]}
            color="#ff4500"
            anchorX="center"
            anchorY="middle"
          >
            ARMENIAN
          </Text>
          <Text
            fontSize={0.8}
            position={[0, -0.5, 0]}
            color="#ff6347"
            anchorX="center"
            anchorY="middle"
          >
            RESTAURANT
          </Text>
        </group>
      </Float>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff4500" />
    </group>
  );
};

const Logo3D = () => {
  return (
    <div className="w-full h-80 relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <AnimatedLogo />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Logo3D;