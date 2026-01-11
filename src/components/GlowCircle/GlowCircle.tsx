import "./GlowCircle.css"

interface GlowCircleProps {
  x: number,
  y: number
}
function GlowCircle({x, y}: GlowCircleProps) {
  return (
    <div className="circle" style={{top: `${y}px`, left:`${x}px`}}></div>
  )
}

export default GlowCircle