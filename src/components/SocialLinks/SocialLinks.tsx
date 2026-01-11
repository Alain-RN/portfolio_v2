import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import IconeLink from "../Icone/IconeLink";

const icones: IconType[] = [
    FaGithub, FaLinkedin, FaEnvelope
]

export default function SocialLinks() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {
                icones.map( (icone)=> <IconeLink url="/" LinkIcone={icone}/>)
            }
        </div>
    );
}
