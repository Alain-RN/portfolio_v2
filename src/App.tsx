import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import GlowCircle from './components/GlowCircle/GlowCircle';

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
      <GlowCircle x={position.x} y={position.y}/>
      <Home />
    </div>
  );
}

export default App;
