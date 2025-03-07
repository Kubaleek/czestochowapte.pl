import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { GET_ALL_PAGES, GET_ALL_POSTS } from "@/graphql/query";
import client from "@/lib/apollo";
import { Metadata } from "next";


type Props = {
    params: Promise<{slug: string[]}>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const fullSlug = slug.join('/'); 
    const isFirstSlug = slug[0]; 
    const isLastSlug = slug[slug.length - 1];  

    const [pagesResponse, postsResponse] = await Promise.all([
        client.query<GetContentPagesResponse>({ query: GET_ALL_PAGES }),
        client.query<GetContentPostsResponse>({ query: GET_ALL_POSTS }),
    ]);

    const findContent = (slugToFind: string) => {
        const page = pagesResponse.data.pages.nodes.find(page => page.slug === slugToFind);
        const post = postsResponse.data.posts.nodes.find(post => post.slug === slugToFind);
        return page || post;
    };

    const firstSlugContent = findContent(isFirstSlug);
    
    let content = findContent(fullSlug);

    if (!content) {
        content = findContent(isLastSlug);
    }

    if (!firstSlugContent) {
        return {
            title: "Strona nie znaleziona",
            description: "Ta strona lub wpis nie istnieje.",
        };
    }

    if (content) {
        return {
            title: content.title,
            description: content.title,
        };
    }

    return {
        title: "Strona nie znaleziona",
        description: "Ta strona lub wpis nie istnieje.",
    };
}







export default function SlugLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            <main className="container overflow-hidden mx-auto max-w-7xl p-4 xl:px-0 pt-6 ">
                {children}
            </main>
            <Footer />
        </>
    );
}