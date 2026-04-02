export const techStack: techStackType[] = [
    {
        name: "React",
        color: "#ffffff",
        icon: "react"
    },
    {
        name: "TypeScript",
        color: "#ffffff",
        icon: "ts"
    },
    {
        name: "Vite",
        color: "#ffffff",
        icon: "vite"
    },
    {
        name: "Tailwind CSS",
        color: "#ffffff",
        icon: "tailwind"
    },
    {
        name: "Express",
        color: "#ffffff",
        icon: "express"
    },
    {
        name: "PostgreSQL",
        color: "#ffffff",
        icon: "postgres"
    },
    {
        name: "MongoDB",
        color: "#ffffff",
        icon: "mongo"
    },
    {
        name: "React Native",
        color: "##ffffff",
        icon: "reactnative"
    },
    {
        name: "Jetpack Compose",
        color: "#ffffff",
        icon: "android"
    }
];

export type techStackType = {
    name: string;
    color: string;
    icon: TechIcon;
}

export type TechIcon =
    | "react"
    | "ts"
    | "vite"
    | "tailwind"
    | "express"
    | "postgres"
    | "mongo"
    | "reactnative"
    | "android";