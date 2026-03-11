'use client'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import {CanvasLoader} from "@/components";

const Ball = ({imgUrl, theme}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={theme}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.06999999}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, 0, -6.25]}
          scale={1.06999999}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, color }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className='!w-[180px] rounded-[30px] !border-2
      !border-indigo-400 block bg-[#0000002e] bg-blur'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} theme={color || '#ffffdd'} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
