'use client'
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, OrbitControls, Html } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({color, rotX, rotY}) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(220), { radius: 1.2 }));

  useFrame((state, delta) => {
//     const x = Math.random(10,11);
//     const y = Math.random(14, 15);
    ref.current.rotation.x -= delta / rotX; //10
    ref.current.rotation.y -= delta / rotY; //15
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={0.00199999}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
const StarsCanvas = ({color, rotX, rotY}) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<Html>Loading...</Html>}>
        <OrbitControls/>
          <Stars color={color} rotX={rotX} rotY={rotY} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas