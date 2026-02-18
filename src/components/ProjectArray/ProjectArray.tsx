import "./ProjectArray.css"
import ProjectRow from "./ProjectRow/ProjectRow"
import { projects } from "./dataArray"

export default function ProjectArray() {
    
    return (
        <div className="project-array">
            <table>
                <thead>
                    <tr>
                        <th>Annee</th>
                        <th>Projet</th>
                        <th className="hide-mobile hide-tablette">Technologie</th>
                        <th className="hide-mobile">Lien</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((value, index)=> (
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
