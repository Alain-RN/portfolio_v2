import "./Navbar.css"
type NavbarProps = { activeSection: string };

export default function Navbar({ activeSection }: NavbarProps) {
    const sections = ["about", "experience", "projects"];

    return (
        <nav>
            {sections.map((id) => (
                <div className="element" key={id} >
                    <a href={`#${id}`} 
                        className={`${activeSection == id ? "selected" : ""}`} 
                        style={{ display: "flex", alignItems: "center", gap: "14px" }} >
                            <div className={`line ${activeSection === id ? "grow" : ""}`}></div>
                            {id.toUpperCase()}
                    </a>
                </div>
            ))}
        </nav>
    );
}
