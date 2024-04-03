'use client';
import { Environment, Html, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export const ProductExperience = () => {
  return (
    <Canvas
      className="w-full h-full bg-white"
      camera={{ fov: 30, zoom: 0.4, position: [0, 1, 6] }}
    >
      <ProductModel />
      <Environment preset="apartment" />
      <OrbitControls autoRotateSpeed={0.8} enableZoom={false} autoRotate />
    </Canvas>
  );
};

export const ProductModel = () => {
  const { nodes, materials }: any = useGLTF('/chair.glb');
  return (
    <group dispose={null} scale={0.05} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FormicaROCKER.geometry}
        material={materials['Formica.ROCKER bake preview']}
      >
        <Html position={[-8, 25, -10]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Total height 85cm
          </div>
        </Html>
        <Html position={[-8, -30, -20]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Width 60cm
          </div>
        </Html>
        <Html position={[30, -5, -20]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Depth 70cm
          </div>
        </Html>
      </mesh>
    </group>
  );
};

useGLTF.preload('/chair.glb');
