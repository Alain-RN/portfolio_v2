import Navbar from "../Navbar/Navbar";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";
import "./LeftSidebar.css"

function LeftSidebar() {
    return (
        <div className="leftSidebar">
            <div className="header">
                <h1>Noelisoa Alain</h1>
                <h2>Full Stack Developpeur</h2>
                <p>I build accessible, pixel-perfect digital experiences for the web.</p>
                <Navbar />
            </div>
            <SocialLinks />
        </div>
    );
}

export default LeftSidebar;
