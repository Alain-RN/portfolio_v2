import "./ExperienceCard.css";
import TechnoCard from "../TechnoCard/TechnoCard";
import { ArrowUpRight } from "lucide-react";

function ExperienceCard() {
    return (
        <div className="experience-card">
            <div className="line-top"></div>
            <div className="line-left"></div>
            <div className="line-bottom"></div>
            <div className="line-right"></div>
            {/* @---------- */}
            <div className="duration">2024 — Present</div>
            {/* @---------- */}
            <div className="description">
                <div className="head">

                    {/* @---------- */}
                    <h3 className="title">
                        Senior Frontend Engineer, Accessibility · Klaviyo <span className="arrow"><ArrowUpRight size={18}/></span>
                    </h3>
                    {/* @---------- */}

                </div>

                {/* @---------- */}
                <p className="paragraph">
                    Senior Frontend Engineer, Accessibility · Klaviyo Build and maintain
                    critical components used to construct Klaviyo’s frontend, across the
                    whole product. Work closely with cross-functional teams, including
                    developers, designers, and product managers, to implement and advocate
                    for best practices in web accessibility. JavaScript TypeScript React
                </p>
                {/* @---------- */}


                {/* @---------- */}
                <div className="techno-list">
                    <TechnoCard name="Java"/>
                    <TechnoCard name="PHP"/>
                    <TechnoCard name="Rust"/>
                    <TechnoCard name="Vali"/>
                </div>
                {/* @---------- */}

            </div>
        </div>
    );
}

export default ExperienceCard;
