
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import THREE.js for color handling
import CanvasLoader from "../Loader";

// Ethereum 3D Model Component with Rotation and Color
const Ether = ({ isMobile }) => {
  const { scene } = useGLTF("./ETHER/scene.gltf");
  const modelRef = useRef();

  // Set the color for the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
        child.material.color = new THREE.Color("rgb(134, 166, 223)"); // Set the material color to #1CAAD9
      }
    });
  }, [scene]);

  // Add continuous rotation to the model
  useFrame(() => {
    if (modelRef.current) {

      modelRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return (
    <mesh ref={modelRef}>
      <hemisphereLight intensity={10.15} groundColor="white" />
      
<spotLight
  position={[0, 10, 0]}
  angle={0.3}
  penumbra={0.5}
  intensity={800}
  castShadow
  shadow-mapSize={1024}
/>
<spotLight
  position={[0,-10 , 0]}
  angle={0.3}
  penumbra={0.5}
  intensity={800}
  castShadow
  shadow-mapSize={1024}
/>

      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5}/>
      <primitive
        object={scene}
        scale={isMobile ? 0.0044 : 0.0055} // Adjust the scale for mobile and desktop
        position={isMobile ? [0, -1.5, -1] : [0, -1.75, -0.5]} // Adjust positions for mobile and desktop
      />
    </mesh>
  );
};

// Main Canvas Component
const EtherCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, 2, 15], fov: 35 }} // Adjusted the camera to give a good view of the rotating object
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Allow zoom
          maxPolarAngle={Math.PI} // Full rotation around the model
          minPolarAngle={0} // Full rotation from bottom to top
        />
        <Ether isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EtherCanvas;
