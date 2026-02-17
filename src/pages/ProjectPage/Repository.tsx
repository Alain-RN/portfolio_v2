import { ArrowLeft } from "lucide-react"
import "./Repository.css"
import { useNavigate } from "react-router-dom";
import ProjectArray from "../../components/ProjectArray/ProjectArray";

export default function Repository() {
    const navigate = useNavigate();
    return (
        <div className='repository'>
            <div className="repository-header">
                <div className="home-link" onClick={() => navigate("/")}>
                    <ArrowLeft size={17} className="i-arrow" />
                    <button>Alain Noelisoa</button>
                </div>
                <h1>Mes Projets</h1>
            </div>
            <ProjectArray></ProjectArray>
        </div>
    )
}
