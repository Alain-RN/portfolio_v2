import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/HomePage/Home';
import Repository from './pages/ProjectPage/Repository';
import GlowCircle from './components/GlowCircle/GlowCircle';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <GlowCircle x={position.x} y={position.y} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Repository />} />
      </Routes>
    </div>
  );
}

export default App;
