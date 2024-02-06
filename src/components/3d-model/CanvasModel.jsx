// src/App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import OwlModel from './OwlModel';

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OwlModel/>
    </Canvas>
  );
};

export default CanvasModel;
