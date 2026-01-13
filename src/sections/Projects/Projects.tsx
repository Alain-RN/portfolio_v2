import "./Projects.css"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import screenShoot from "../../assets/Capture d’écran du 2026-01-13 14-26-27-1.png"

function Projects() {
    return(
        <div className="projects">
            <ProjectCard imgSrc={screenShoot} title={null} desciption={null}/>
        </div>
    )
}

export default Projects