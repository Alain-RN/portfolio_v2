import { experiences } from "../../../data/Experience"
import ExperienceCard from "../../ExperienceCard/ExperienceCard"
function Experience() {
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"24px"}}>
            {
                experiences.map((exp)=>(
                    <ExperienceCard {...exp}></ExperienceCard>
                ))
            }
        </div>
    )
}

export default Experience