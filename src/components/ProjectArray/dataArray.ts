export interface Project {
    year: number;
    project: string;
    technologies: string[];
    link: string;
}

export const projects: Project[] = [
    {
        year: 2024,
        project: "Portfolio Personnel",
        technologies: ["React", "TypeScript", "CSS", "Firebase", "Java", "Leo", 'Messi'],
        link: "https://github.com/noelisoa/portfolio"
    },
    {
        year: 2024,
        project: "Application de Gestion de Tâches",
        technologies: ["React Native", "Expo", "Firebase"],
        link: "https://github.com/noelisoa/task-manager"
    },
    {
        year: 2023,
        project: "API REST E-commerce",
        technologies: ["Node.js", "Express", "MongoDB"],
        link: "https://github.com/noelisoa/ecommerce-api"
    },
    {
        year: 2023,
        project: "Dashboard Admin",
        technologies: ["React", "Redux", "TailwindCSS"],
        link: "https://github.com/noelisoa/admin-dashboard"
    }
];
