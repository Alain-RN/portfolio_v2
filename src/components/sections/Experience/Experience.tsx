import ExperienceCard from "../../ExperienceCard/ExperienceCard"
function Experience() {
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
        </div>
    )
}

export default Experience