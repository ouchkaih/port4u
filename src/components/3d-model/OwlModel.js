// src/components/MyModel.js
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const OwlModel = () => {
  const gltf = useGLTF('./owl.glb');

  useFrame(() => {
    // Update animation here if needed
    // ...
  });

  return <primitive object={gltf.scene} scale={[1, 1, 1]} />;
};

export default OwlModel;


