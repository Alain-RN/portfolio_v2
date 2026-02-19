export interface Experience {
    year: string;
    role: string;
    description: string;
    techStack: string[];
}

export const experiences: Experience[] = [
    {
        year: "2025 — Présent",
        role: "Développeur Full Stack · Projets personnels",
        description:
            "J’ai créé plusieurs applications web interactives avec React et TypeScript, en développant des interfaces modernes et responsives. J’ai également mis en place des back-end simples avec Node.js et PostgreSQL pour gérer les données. Mes projets sont réalisés en mettant l’accent sur la qualité du code et l’expérience utilisateur.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "CSS"]
    },
    {
        year: "2024 — 2025",
        role: "Portfolio et projets GitHub",
        description:
            "Pour présenter mes réalisations, j’ai conçu un portfolio personnel qui affiche mes projets GitHub en temps réel. J’ai expérimenté React Native pour créer des applications mobiles multiplateformes et renforcé mes compétences en JavaScript et CSS.",
        techStack: ["React", "React Native", "JavaScript", "CSS"]
    },
    {
        year: "2023 — 2024",
        role: "Projets de formation / auto-apprentissage",
        description:
            "J’ai réalisé plusieurs projets pour améliorer mes compétences front-end, explorer la création d’applications web et expérimenter des interfaces dynamiques.",
        techStack: ["HTML", "CSS", "JavaScript"]
    }
];
