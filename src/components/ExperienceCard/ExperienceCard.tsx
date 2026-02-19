import "./ExperienceCard.css";
import TechnoCard from "../TechnoCard/TechnoCard";
import { ArrowUpRight } from "lucide-react";
import type { Experience } from "../../data/Experience";

type ExperienceCardProps = Experience;

function ExperienceCard({ year, role, description, techStack }: ExperienceCardProps) {
    return (
        <div className="experience-card">
            <div className="line-top"></div>
            <div className="line-left"></div>
            <div className="line-bottom"></div>
            <div className="line-right"></div>
            {/* @---------- */}
            <div className="duration">{year}</div>
            {/* @---------- */}
            <div className="description">
                <div className="head">

                    {/* @---------- */}
                    <h3 className="title">
                        {role} <span className="arrow"><ArrowUpRight size={18} /></span>
                    </h3>
                    {/* @---------- */}

                </div>

                {/* @---------- */}
                <p className="paragraph">
                    {description}
                </p>
                {/* @---------- */}


                {/* @---------- */}
                <div className="techno-list">
                    {
                        techStack.map(tech => (
                            <TechnoCard key={tech} name={tech}/>
                        ))
                    }
                </div>
                {/* @---------- */}

            </div>
        </div>
    );
}

export default ExperienceCard;
