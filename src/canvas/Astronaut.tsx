'use client';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import {CanvasLoader, Lights} from "@/components";

import Astronaut from './models/Astronaut.jsx';

const AstronautCanvas = () => {
  return (
    <Canvas className="!overflow-visible !h-[600px]">
      <Suspense fallback={<CanvasLoader />}>
      <Lights/>
        <Astronaut position={[0,0.375,0]} scale={[6,5.6999,6]} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );};

export default AstronautCanvas