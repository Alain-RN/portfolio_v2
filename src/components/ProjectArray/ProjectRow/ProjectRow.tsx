import { BsGithub } from 'react-icons/bs';
import { getSiteName } from '../../../utils/url';
import TechnoCard from '../../TechnoCard/TechnoCard'
import "./ProjectRow.css"

interface ProjectRowProps {
    year: number,
    project: string,
    technologies: string[],
    link: string
}

export default function ProjectRow({ year, project, technologies, link }: ProjectRowProps) {
    const siteName = getSiteName(link);
    return (
        <tr className='project-row'>
            <td className='year'>{year}</td>
            <td className='project'>{project}</td>
            <td className='hide-mobile hide-tablette'>
                <div className='techno-list '>
                    {technologies.map((tech, index) => (
                        <TechnoCard key={index} name={tech} />
                    ))}
                </div>
            </td>
            <td className='hide-mobile link'>
                <a href={link}>{siteName}{siteName === "github" && <BsGithub size={14}/>}</a>
            </td>
        </tr>
    )
}
