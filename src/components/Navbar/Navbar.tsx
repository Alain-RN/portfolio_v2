import "./Navbar.css"
type NavbarProps = { activeSection: string };

export default function Navbar({ activeSection }: NavbarProps) {
    const sections = [
        ["about", "À propos"],
        ["experience", "Expérience"],
        ["projects", "Contact"]
    ];

    return (
        <nav>
            {sections.map((id) => (
                <div className="element" key={id[0]} >
                    <a href={`#${id[0]}`} 
                        className={`${activeSection == id[0] ? "selected" : ""}`} 
                        style={{ display: "flex", alignItems: "center", gap: "14px" }} >
                            <div className={`line ${activeSection === id[0] ? "grow" : ""}`}></div>
                            {id[1].toUpperCase()}
                    </a>
                </div>
            ))}
        </nav>
    );
}
