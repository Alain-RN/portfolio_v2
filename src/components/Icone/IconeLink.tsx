import "./IconeLink.css"
import type { IconType } from "react-icons";

interface IconeLinkProps {
    url: string,
    LinkIcone: IconType
}
function IconeLink({url, LinkIcone}: IconeLinkProps) {
    return (
        <div>
            <a href={url}>
                <LinkIcone size={24} className="hover-icone"/>
            </a>
        </div>
    )
}

export default IconeLink