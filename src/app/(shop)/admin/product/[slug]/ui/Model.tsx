import { Environment, Html, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

interface Props {
  model?: string | null;
  measurements?: {
    total_height: number | null;
    seat_height: number | null;
    width: number | null;
    depth: number | null;
  };
}

export const Model = ({ measurements, model }: Props) => {
  console.log(model);
  return (
    <Canvas
      className="w-full h-full bg-yellow-300 relative z-10"
      camera={{ fov: 30, zoom: 0.4, position: [0, 1, 6] }}
    >
      <ProductModel measurements={measurements} model={model} />
      <Environment preset="apartment" />
      <OrbitControls autoRotateSpeed={0.8} enableZoom={false} autoRotate />
    </Canvas>
  );
};

export const ProductModel = ({ measurements, model }: Props) => {
  const { scene }: any = useGLTF(model ?? '/chair.glb');

  return (
    <>
      <primitive object={scene} scale={0.05}>
        <Html position={[-8, 30, -10]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Total height {measurements?.total_height}cm
          </div>
        </Html>
        <Html position={[-18, -30, -20]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Width {measurements?.width}cm
          </div>
        </Html>
        <Html position={[40, -5, -40]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Depth {measurements?.depth}cm
          </div>
        </Html>
        <Html position={[-50, -5, 20]}>
          <div className="py-1 px-2 text-sm text-nowrap bg-white border border-black rounded-full font-bold select-none">
            Depth {measurements?.seat_height}cm
          </div>
        </Html>
      </primitive>
    </>
  );
};
