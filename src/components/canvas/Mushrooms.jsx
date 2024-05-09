import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Mushrooms = ({ isMobile }) => {
  const mushroom = useGLTF('./mushrooms/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={mushroom.scene} scale={isMobile ? 1.5 : 2.15} position={isMobile ? [-9, -3.5, -2 ]: [1.2, -2.1, -2.5]}
      rotation={[0, -0.8, .037]}/>
    </mesh>
  )
}

const MushroomsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width : 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
  })
  return (
    <Canvas frameLoop="demand" shadows camera={{ position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} mPolarAngle={Math.PI / 2} />
        <Mushrooms isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default MushroomsCanvas;