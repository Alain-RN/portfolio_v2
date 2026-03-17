import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import IconeLink from "../Icone/IconeLink";

const icones: IconType[] = [
    FaGithub, FaLinkedin, FaEnvelope
]

const link: string[] = [
    "https://github.com/Alain-RN",
    "https://www.linkedin.com/in/noelisoa-alain-58b075395/",
    "mailto:alainrakotoarivony926@gmail.com"
]

export default function SocialLinks() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {
                icones.map((icone, i) => <IconeLink url={link[i]} key={i} LinkIcone={icone} />)
            }
        </div>
    );
}
