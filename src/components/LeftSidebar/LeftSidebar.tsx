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
                    <a href="#"><h1>Noelisoa Alain</h1></a>
                    <h2>Développeur Full Stack</h2>
                    <p>Je crée des expériences digitales modernes et performantes pour le web et le mobile.</p>
                </div>
                <Navbar activeSection={activeSection}/>
            </div>
            <SocialLinks />
        </div>
    );
}

export default LeftSidebar;
