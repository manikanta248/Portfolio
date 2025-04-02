import { Html, useProgress } from '@react-three/drei';
import React from 'react';

export default function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html center style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            width: "100vw",  // Use 100% width instead of fixed width
            color: "#F1F1F1",
            background:"transparent"
        }}>
            <span className='canvas-loader'>
                <p style={{ fontSize: "14px", fontWeight: "800", marginTop: '40px' }}>
                    {progress !== 0 ? `${progress.toFixed(2)}% loaded` : 'Loading...'}
                </p>
            </span>
        </Html>
    );
}
