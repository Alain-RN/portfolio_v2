import TechnoCard from '../../TechnoCard/TechnoCard'
import "./ProjectRow.css"

interface ProjectRowProps {
    year: number,
    project: string,
    technologies: string[],
    link: string
}

export default function ProjectRow({ year, project, technologies, link }: ProjectRowProps) {
    return (
        <tr className='project-row'>
            <td className='year'>{year}</td>
            <td className='project'>{project}</td>
            <td>
                <div className='techno-list'>
                    {technologies.map((tech, index) => (
                        <TechnoCard key={index} name={tech} />
                    ))}
                </div>
            </td>
            <td className='year'>
                <a href={link}>Github</a>
            </td>
        </tr>
    )
}
