import { BsGithub } from 'react-icons/bs';
import { getSiteName } from '../../../utils/url';
import TechnoCard from '../../TechnoCard/TechnoCard'
import "./ProjectRow.css"
import { ArrowUpRight } from 'lucide-react';

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
            <td className='project'>
                <span className='hide-mobile'>{project}</span>
                <a className='d-none-md' href={link}>
                    <div style={{display:"flex", gap: 6}}>
                        {project} <ArrowUpRight className="arrow-link" size={18}/>
                    </div>
                </a>
            </td>
            <td className='hide-mobile hide-tablette'>
                <div className='techno-list'>
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
