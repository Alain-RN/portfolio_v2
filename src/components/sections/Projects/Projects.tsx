import "./Projects.css"
import screenShoot from "../../../assets/Capture d’écran du 2026-01-13 14-26-27-1.png"
import ProjectCard from "../../ProjectCard/ProjectCard"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Projects() {
    const navigate = useNavigate();
    return(
        <div className="projects">
            <ProjectCard imgSrc={screenShoot} title={null} desciption={null}/>
            <div className="repository-link" onClick={() => navigate("/projects")}>
                <button>Voire tout mes projets</button>
                <ArrowRight size={16} className="i-arrow"/>
            </div>
        </div>
    )
}

export default Projects