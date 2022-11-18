import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import gsap from 'gsap'
import { Sky, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import angleToRadians from '../utils/angle';
import { useFrame } from '@react-three/fiber';
const Three = () => {
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if (!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            // console.log(y * angleToRadians(90 - 30));
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            orbitControlsRef.current.update();
        };
    });

    const ballRef = useRef(null);
    useEffect(() => {
        if (!!ballRef.current) {
            console.log(ballRef.current)
            const timeline = gsap.timeline({ paused: true });
            // timeline.to(ballRef.current.position, {
            //     x: 1,
            //     duration: 2,
            //     ease: 'power2.out'
            // });
            timeline.to(ballRef.current.position, {
                y: 0.5,
                duration: 3,
                ease: 'bounce.out'
            });
            timeline.play();
        };
    }, [ballRef.current]);

    // useEffect(() => {
    //     if (!!orbitControlsRef.current) {
    //         console.log(orbitControlsRef.current);
    //     };
    // }, [orbitControlsRef.current]);

    return (
        <>
            {/* <Sky/> */}
            <PerspectiveCamera makeDefault position={[0, 1, 10]} />
            <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

            <mesh position={[0, 10, 0]} castShadow ref={ballRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffffff"/>
            </mesh>

            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#039044" />
            </mesh>
            <ambientLight args={["#ffffff", 0.25]} />
            <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />
            <Environment background>
                <mesh>
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color="#1caff1" side={THREE.BackSide} />
                </mesh>
            </Environment>
        </>
    )
}

export default Three