import React from 'react';
import './index.css'
import Three from './components/Three';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;
