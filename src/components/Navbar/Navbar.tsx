import "./Navbar.css"
type NavbarProps = { activeSection: string };

export default function Navbar({ activeSection }: NavbarProps) {
    const sections = ["about", "experience", "projects"];

    return (
        <nav>
            {sections.map((id) => (
                <div key={id} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <div className={`line ${activeSection === id ? "grow" : ""}`}></div>
                    <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
                </div>
            ))}
        </nav>
    );
}
