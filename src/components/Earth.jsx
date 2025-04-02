import React from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function Earth(props) {
  const { nodes, materials } = useGLTF('/models/earthdunya.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material}
        position={[0, 0, 0]}
        scale={0.115}
      />
      {/* Orbit Controls to allow rotation and zoom */}
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}  // Restrict vertical rotation
        minPolarAngle={Math.PI / 4}  // Restrict downward rotation
      />
    </group>
  );
}

useGLTF.preload('/models/earthdunya.glb');
