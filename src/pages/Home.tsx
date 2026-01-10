import { useEffect, useRef, useState } from "react";
import MainLayout from "../layout/MainLayout";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import About from "../sections/About/About";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Projects/Projects";

export default function Home() {
    const [activeSection, setActiveSection] = useState("about");
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);

                        // Met à jour le hash pendant le scroll
                        window.history.replaceState(null, "", `#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        // Cleanup à la destruction du composant
        return () => observer.disconnect();
    }, []);


    return (
        <MainLayout
            left={<LeftSidebar activeSection={activeSection} />}
            right={
                <>
                    <section id="about" ref={(el) => (sectionRefs.current["about"] = el)}>
                        <About />
                    </section>
                    <section id="experience" ref={(el) => (sectionRefs.current["experience"] = el)}>
                        <Experience />
                    </section>
                    <section id="projects" ref={(el) => (sectionRefs.current["projects"] = el)}>
                        <Projects />
                    </section>
                </>
            }
        />
    );
}
