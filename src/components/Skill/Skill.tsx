import "./Skill.css"

interface SkillProps {
    name: string,
}
function Skill({name}:SkillProps) {
    return (
        <span className="skill">{name}</span>
    )
}

export default Skill