'use client';
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p className='!text-3xl !mt-[40px] !font-black text-blue-400'>
        {progress.toFixed(1)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;