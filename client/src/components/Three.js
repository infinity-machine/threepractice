import React from 'react'
import { Sky, PerspectiveCamera } from '@react-three/drei'
import angleToRadians from '../utils/angle';
const Three = () => {
  return (
    <>
    <Sky/>
    <PerspectiveCamera makeDefault position={[0, 1, 5]}/>
    
    <mesh position={[0, .5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]}/>
        <meshStandardMaterial color="#ffffff"/>
    </mesh>

    <mesh rotation={[-(angleToRadians(90)), 0, 0]}>
        <planeGeometry args={[7, 7]}/>
        <meshStandardMaterial color="lightgreen"/>
    </mesh>
    <ambientLight args={["#ffffff", 1]}/>
    </>
  )
}

export default Three