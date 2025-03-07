export function removeHtml(content: string): string {
    return content.replace(/<[^>]*>/g, "")
}