import { techStack } from "../../../data/TechStack";
import "./Technologies.css"

import {
    SiReact,
    SiTypescript,
    SiVite,
    SiTailwindcss,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiAndroid
} from "react-icons/si";

const icons = {
    'react': SiReact,
    'ts': SiTypescript,
    'vite': SiVite,
    'tailwind': SiTailwindcss,
    'express': SiExpress,
    'postgres': SiPostgresql,
    'mongo': SiMongodb,
    "reactnative": SiReact,
    'android': SiAndroid
};

function Technologies() {
    return (
        <div className="technologie-section">
            <h3 className="section-title">TECHNOLOGIES</h3>
            <div className="row">
                {techStack.map((tech, index) => {
                    const Icon = icons[tech.icon];
                    return (
                        <div
                            key={index}
                        >
                            {Icon && (
                                <Icon size={34} style={{ color: tech.color }}/>
                            )}

                            <span style={{ color: tech.color, display: "none" }}>
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Technologies;