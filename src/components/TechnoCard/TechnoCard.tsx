import "./TechnoCard.css"

interface TechnoCardProps {
    name: string,
}
function TechnoCard({name}:TechnoCardProps) {
    return (
        <span className="techno-card">{name}</span>
    )
}

export default TechnoCard