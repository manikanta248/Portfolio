import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import React, { useRef } from 'react';
import { easing } from 'maath';

export default function Emoji() {
  // Refs for the left and right eyes
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  // useFrame to move the eyes based on the cursor position
  useFrame((state, delta) => {
    const { x, y } = state.pointer; // Get mouse position in normalized [-1, 1] range
    const eyeMovement = [x / 10, -y / 10, 0]; // Adjust movement intensity

    // Smoothly move both eyes
    if (leftEyeRef.current && rightEyeRef.current) {
      easing.damp3(leftEyeRef.current.position, [-0.4 + eyeMovement[0], 0.3 + eyeMovement[1], 1.5], 0.2, delta);
      easing.damp3(rightEyeRef.current.position, [0.4 + eyeMovement[0], 0.3 + eyeMovement[1], 1.5], 0.2, delta);
    }
  });

  return (
    <group>
      {/* The face (emoji head) */}
      <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="yellow" />
      </Sphere>

      {/* Left Eye */}
      <Sphere ref={leftEyeRef} args={[0.2, 32, 32]} position={[-0.4, 0.3, 1.5]}>
        <meshStandardMaterial color="black" />
      </Sphere>

      {/* Right Eye */}
      <Sphere ref={rightEyeRef} args={[0.2, 32, 32]} position={[0.4, 0.3, 1.5]}>
        <meshStandardMaterial color="black" />
      </Sphere>
    </group>
  );
}


