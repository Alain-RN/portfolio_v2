import "./index.css"
import { ArrowUpRight } from "lucide-react"
import { experiences } from "../../../data/Experience"
import ExperienceCard from "../../ExperienceCard/ExperienceCard"
function Experience() {
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"24px"}}>
            {
                experiences.map((exp, index)=>(
                    <ExperienceCard key={index} {...exp}></ExperienceCard>
                ))
            }
            <a 
                download
                className="cv" 
                href={`${import.meta.env.BASE_URL}CV_Noelisoa_Alain_2026.pdf`}
            >
                Télécharger mon CV <span className="arrow"><ArrowUpRight size={18} /></span>
            </a>
        </div>
    )
}

export default Experience