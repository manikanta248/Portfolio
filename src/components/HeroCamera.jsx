import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react';

export default function HeroCamera({ children, isMobile }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smoothly move the camera position towards [0, 0, 20]
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

    // Rotate the group based on the mouse pointer when not on mobile
    if (!isMobile && groupRef.current) {
      easing.dampE(groupRef.current.rotation, [-state.pointer.y/2 , state.pointer.x/2 , 0], 0.2, delta);
    }
  });

  return <group ref={groupRef}>{children}</group>;
}
