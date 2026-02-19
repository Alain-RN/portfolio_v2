import { useState, useEffect } from "react";
import { fetchFormattedProjects, type ProjectRowType } from "../../utils/github";
import "./ProjectArray.css"
import ProjectRow from "./ProjectRow/ProjectRow"
import Loading from "../Loading/Loading";
import { BsGithub } from "react-icons/bs";

export default function ProjectArray() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [projects, setProjects] = useState<ProjectRowType[]>([]);

    useEffect(() => {
        fetchFormattedProjects("Alain-RN")
            .then(setProjects)
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    if (error) {
        return (
            <div className="log-error-container">
                <div className="log-error">
                    Impossible de charger automatiquement les projets depuis GitHub
                </div>
                <div style={{display: "flex", alignItems: "baseline", gap: "8px"}}>
                    Vous pouvez consulter mes projets directement ici :{" "}
                    <a
                        href="https://github.com/Alain-RN"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: "flex", justifyContent: "center", gap: "4px"}}
                    >
                        GitHub <BsGithub/>
                    </a>
                </div>
                <div>
                    (Certains projets récents peuvent ne pas s’afficher ici si GitHub limite les requêtes.)
                </div>
            </div>
        );
    }

    if (loading) {
        return <div className="loader-container">
            <Loading />
        </div>;
    }

    return (
        <div className="project-array">
            <table>
                <thead>
                    <tr>
                        <th>Annee</th>
                        <th>Projet</th>
                        <th className="hide-mobile hide-tablette">Tech Stack</th>
                        <th className="hide-mobile">Lien</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((value, index) => (
                            <ProjectRow
                                key={index}
                                year={value.year}
                                project={value.project}
                                technologies={value.technologies}
                                link={value.link}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
