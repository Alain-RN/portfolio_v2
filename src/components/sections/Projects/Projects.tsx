import "./Projects.css"
import screenShoot1 from "../../../assets/img/pokedexOverview.png"
import screenShoot2 from "../../../assets/img/portfolio.png"
import ProjectCard from "../../ProjectCard/ProjectCard"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects">
            <ProjectCard
                imgSrc={screenShoot2}
                title={"Portfolio (Noefolio)"}
                desciption={"Portfolio personnel présentant mes projets, compétences et expériences en développement web. Conçu avec un design moderne inspiré du cyberpunk, il met l'accent sur la performance, l'interactivité et une expérience utilisateur fluide."}
                tech={[
                    "React",
                    "CSS",
                    "JavaScript",
                    "UI/UX"
                ]}
            />
            <br />
            <br />

            <ProjectCard
                imgSrc={screenShoot1}
                title={"Pokédex Mobile"}
                desciption={"Application Pokédex moderne développée avec React Native et Expo, permettant de consulter les informations détaillées des Pokémon (statistiques, types, capacités, images) via une interface fluide et intuitive. Le projet est fonctionnel, avec des animations en cours d’intégration pour enrichir l’expérience utilisateur."}
                tech={[
                    "React Native",
                    "Expo",
                    "TypeScript",
                    "REST API",
                    "React Navigation",
                    "Styled Components"
                ]}
            />

            <div className="repository-link-container">
                <div
                    className="repository-link"
                    onClick={() => navigate("/projects")}>
                    <button>Voire tout mes projets</button>
                    <ArrowRight size={16} className="i-arrow" />
                </div>

            </div>
        </div>
    )
}

export default Projects