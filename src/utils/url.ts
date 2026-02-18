export function getSiteName(url: string): string {
    try {
        const hostname = new URL(url).hostname;
        return hostname.split(".")[0];
    } catch {
        return "";
    }
}
