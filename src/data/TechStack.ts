export const techStack: techStackType[] = [
    {
        name: "React",
        color: "##ffffff",

        icon: "react"
    },
    {
        name: "TypeScript",
        color: "rgb(228, 228, 228)",

        icon: "ts"
    },
    {
        name: "Vite",
        color: "rgb(228, 228, 228)",

        icon: "vite"
    },
    {
        name: "Tailwind CSS",
        color: "rgb(228, 228, 228)",

        icon: "tailwind"
    },
    {
        name: "Express",
        color: "rgb(228, 228, 228)",

        icon: "express"
    },
    {
        name: "PostgreSQL",
        color: "rgb(228, 228, 228)",

        icon: "postgres"
    },
    {
        name: "MongoDB",
        color: "rgb(228, 228, 228)",
        icon: "mongo"
    },
    {
        name: "React Native",
        color: "rgb(140, 140, 130)",
        icon: "reactnative"
    },
    {
        name: "Jetpack Compose",
        color: "rgb(228, 228, 228)",

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