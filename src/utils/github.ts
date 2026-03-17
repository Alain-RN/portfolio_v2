import type { GitHubRepo } from "../types/github";

export interface ProjectRowType {
    year: number;
    project: string;
    technologies: string[];
    link: string;
}

const BASE_URL = "https://api.github.com";

// Si tu as un token GitHub, mets-le dans ton .env
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

async function fetchJSON(url: string) {
    const response = await fetch(url, {
        headers: GITHUB_TOKEN
            ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
            : undefined,
    });

    if (!response.ok) {
        throw new Error(`Erreur GitHub: ${response.status} ${response.statusText}`);
    }

    return response.json();
}
// Local
// export async function fetchFormattedProjects(
//     username: string
// ): Promise<ProjectRowType[]> {
//     const repos: GitHubRepo[] = await fetchJSON(
//         `${BASE_URL}/users/${username}/repos?per_page=100`
//     );

//     const filteredRepos = repos.filter((repo) => !repo.fork);

//     const projects: ProjectRowType[] = await Promise.all(
//         filteredRepos.map(async (repo) => {
//             let technologies: string[] = [];

//             try {
//                 const languagesData = await fetchJSON(
//                     `${BASE_URL}/repos/${username}/${repo.name}/languages`
//                 );
//                 technologies = Object.keys(languagesData);
//             } catch {
//                 technologies = [];
//             }

//             return {
//                 year: new Date(repo.created_at).getFullYear(),
//                 project: repo.name,
//                 technologies,
//                 link: repo.html_url,
//             };
//         })
//     );

//     projects.sort((a, b) => b.year - a.year);

//     return projects;
// }

export async function fetchFormattedProjects(
    username: string
): Promise<ProjectRowType[]> {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = token ? { Authorization: `token ${token}` } : undefined;

    // Récupérer tous les repos
    const repos: GitHubRepo[] = await fetchJSON(
        `${BASE_URL}/users/${username}/repos?per_page=100`,
        headers
    );

    const filteredRepos = repos.filter((repo) => !repo.fork);

    const projects: ProjectRowType[] = await Promise.all(
        filteredRepos.map(async (repo) => {
            let technologies: string[] = [];

            try {
                const languagesData = await fetchJSON(
                    `${BASE_URL}/repos/${username}/${repo.name}/languages`,
                    headers
                );
                technologies = Object.keys(languagesData);
            } catch {
                technologies = [];
            }

            return {
                year: repo.created_at ? new Date(repo.created_at).getFullYear() : 0,
                project: repo.name,
                technologies,
                link: repo.html_url,
            };
        })
    );

    projects.sort((a, b) => b.year - a.year);

    return projects;
}
