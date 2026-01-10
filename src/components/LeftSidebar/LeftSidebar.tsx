import Navbar from "../Navbar/Navbar";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";
import "./LeftSidebar.css"

interface LeftSidebarProps {
    activeSection: string
}

function LeftSidebar({activeSection}: LeftSidebarProps) {
    return (
        <div className="leftSidebar">
            <div className="header">
                <div>
                    <h1>Noelisoa Alain</h1>
                    <h2>Full Stack Developpeur</h2>
                    <p>I build accessible, pixel-perfect digital experiences for the web.</p>
                </div>
                <Navbar activeSection={activeSection}/>
            </div>
            <SocialLinks />
        </div>
    );
}

export default LeftSidebar;
