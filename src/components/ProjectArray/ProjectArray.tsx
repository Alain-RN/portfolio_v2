import "./ProjectArray.css"
import ProjectRow from "./ProjectRow/ProjectRow"
import { projects } from "./dataArray"

export default function ProjectArray() {
    
    return (
        <div className="project-array">
            <table>
                <thead>
                    <tr>
                        <th style={{width: "7%"}}>Annee</th>
                        <th style={{width: "27%"}}>Projet</th>
                        <th style={{width: "46"}}>Technologie</th>
                        <th style={{width: "20%"}}>Lien</th>
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
