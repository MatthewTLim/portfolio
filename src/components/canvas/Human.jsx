import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'


const Human = () => {
  const human = useGLTF('./human/scene.gltf')
  return (
    <primitive
      object={human.scene}
      scale={1.1}
      position-y={0}
      rotation-y={0}
    />
  )
}

const HumanCanvas = () => {
  return (
    <Canvas

      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <hemisphereLight intensity={1} groundColor="black" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Human />
      </Suspense>
    </Canvas>
  )
}

export default HumanCanvas;
