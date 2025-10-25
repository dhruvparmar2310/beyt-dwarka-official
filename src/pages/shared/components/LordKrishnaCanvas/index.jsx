"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Stage } from "@react-three/drei";
import LordKrishnaModel from "../LordKrishnaModel";

const BackgroundMusic = () => {
    // useEffect(() => {
    //     const audio = new Audio("/audio/krishna-flute.mp3");
    //     audio.loop = true;
    //     audio.volume = 0.5;
    //     audio.play().catch(() => {
    //         const onClick = () => {
    //             audio.play();
    //             window.removeEventListener("click", onClick);
    //         };
    //         window.addEventListener("click", onClick);
    //     });

    //     return () => {
    //         audio.pause();
    //     };
    // }, []);

    return null;
};

const LordKrishnaCanvas = () => {
    return (
        <>
            <BackgroundMusic />
            <Canvas
                shadows
                camera={{ position: [0, 1, 3], fov: 50 }}
                style={{ height: "100vh" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight
                    castShadow
                    intensity={1.5}
                    position={[5, 10, 5]}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <Suspense fallback={null}>
                    <Stage
                        intensity={1}
                        environment="sunset"
                        shadows={{ type: "contact" }}
                        adjustCamera
                    >
                        <LordKrishnaModel />
                    </Stage>
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>
        </>
    );
};

export default LordKrishnaCanvas;