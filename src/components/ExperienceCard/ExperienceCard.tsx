import "./ExperienceCard.css";
import Skill from "../Skill/Skill";

function ExperienceCard() {
    return (
        <div className="experience-card">
            {/* @---------- */}
            <div className="duration">2024 — Present</div>
            {/* @---------- */}
            <div className="description">
                <div className="head">

                    {/* @---------- */}
                    <h3 className="title">
                        Senior Frontend Engineer, Accessibility · Klaviyo <strong>+</strong>
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
                <div className="skills">
                    <Skill name="Java"/>
                    <Skill name="PHP"/>
                    <Skill name="Rust"/>
                    <Skill name="Vali"/>
                </div>
                {/* @---------- */}

            </div>
        </div>
    );
}

export default ExperienceCard;
