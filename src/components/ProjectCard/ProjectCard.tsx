import "./ProjectCard.css"
import TechnoCard from "../TechnoCard/TechnoCard"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    imgSrc : string,
    title? : string,
    desciption? : string,
    tech: string[]
}

function ProjectCard({imgSrc, title, desciption, tech}: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="line-top"></div>
            <div className="line-left"></div>
            <div className="line-bottom"></div>
            <div className="line-right"></div>
            {/* @---------- */}
            <div className="project-img">
                <img src={imgSrc} alt="" />
            </div>
            {/* @---------- */}
            <div className="description">
                <div className="head">

                    {/* @---------- */}
                    <h3 className="title">
                        {title} <span className="arrow"><ArrowUpRight size={18}/></span>
                    </h3>
                    {/* @---------- */}

                </div>

                {/* @---------- */}
                <p className="paragraph">
                    {desciption}
                </p>
                {/* @---------- */}


                {/* @---------- */}
                <div className="techno-list">
                    {tech.map((value, index) => 
                        <TechnoCard name={value} key={index}/>
                    )}
                </div>
                {/* @---------- */}

            </div>
        </div>
    )
}

export default ProjectCard