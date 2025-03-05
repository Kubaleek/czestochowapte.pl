export function convertToLocalhost(url: string) {
    const cmsBase = process.env.NEXT_PUBLIC_CMS_GRAPHQL?.replace('/graphql', '') || '';
    const newUrl = url.replace(cmsBase, 'http://localhost:3000');
    return newUrl;
}
