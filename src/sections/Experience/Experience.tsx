import ExperienceCard from "../../components/ExperienceCard/ExperienceCard"
function Experience() {
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"24px"}}>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
        </div>
    )
}

export default Experience