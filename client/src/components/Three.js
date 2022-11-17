import React, { useEffect, useRef } from 'react'
import { Sky, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import angleToRadians from '../utils/angle';
import { useFrame } from '@react-three/fiber';
const Three = () => {
    const orbitControlsRef = useRef(null);
    useFrame((state) => {
        if(!!orbitControlsRef.current) {
            const { x, y } = state.mouse;
            console.log(y * angleToRadians(90 - 30));
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
            orbitControlsRef.current.update();
        };
    });

    useEffect(() => {
        if(!!orbitControlsRef.current) {
            console.log(orbitControlsRef.current);
        };
    }, [orbitControlsRef.current]);

  return (
    <>
    <Sky/>
    <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
    <OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>

    <mesh position={[0, .5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]}/>
        <meshStandardMaterial color="#ffffff"/>
    </mesh>

    <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]}/>
        <meshPhongMaterial color="lightgreen"/>
    </mesh>
    <ambientLight args={["#ffffff", 0.25]}/>
    <spotLight args={["#ffffff", 1.5, 10, angleToRadians(45), 0.4]} position={[-7, 2, 0 ]} castShadow/>
    </>
  )
}

export default Three