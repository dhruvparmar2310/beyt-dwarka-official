import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function LordKrishnaModel (props) {
    const ref = useRef();
    const { scene } = useGLTF("/models/lord-krishna.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                // Enable material updates
                child.material = new THREE.MeshStandardMaterial();

                const name = child.name.toLowerCase();

                // Set material colors based on mesh names
                if (name.includes("face") || name.includes("skin") || name.includes("body")) {
                    child.material.color.set("#0A0A0A"); // Deep black (Krishna)
                } else if (name.includes("lip")) {
                    child.material.color.set("#C21807"); // Red lips
                } else if (name.includes("eyes")) {
                    child.material.color.set("#00FFFF"); // Bright cyan eyes
                } else if (name.includes("crown") || name.includes("mukut")) {
                    child.material.color.set("#FFD700"); // Gold crown
                } else if (name.includes("jewelry") || name.includes("necklace") || name.includes("ornament")) {
                    child.material.color.set("#FF1493"); // Pinkish gems
                } else if (name.includes("dress") || name.includes("cloth") || name.includes("clothes")) {
                    child.material.color.set("#4CAF50"); // Rich green dress
                } else if (name.includes("belt") || name.includes("border")) {
                    child.material.color.set("#F5DEB3"); // Light golden border
                } else {
                    // Fallback material
                    child.material.color.set("#6b6969"); // Bronze-like base
                }

                // Optional: increase shine and realism
                child.material.metalness = 0.4;
                child.material.roughness = 0.3;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [scene]);

    return (
        <group ref={ref} {...props} dispose={null}>
            <primitive object={scene} scale={0.006} position={[0, -1, 0]} rotation={[-1.5, -0.1, 0.5]} />
        </group>
    );
}
