import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { GET_PAGES, GET_POSTS } from "@/graphql/query";
import client from "@/lib/apollo";
import { PagesResponse } from "@/types/pages";
import { PostsResponse } from "@/types/posts";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const fullSlug = params.slug.join("/");

  const [pagesResponse, postsResponse] = await Promise.all([client.query<PagesResponse>({ query: GET_PAGES }), client.query<PostsResponse>({ query: GET_POSTS })]);
  const findContent = (slug: string) => {
    const page = pagesResponse.data.pages.find(page => page.slug === slug);
    const post = postsResponse.data.articles.find(post => post.slug === slug);

    return page || post
  }

  const content = findContent(fullSlug);

  return {
    title: content ? `PTE | ${content.title}` : "Polskie Towarzystwo Ekonomiczne",
  };
  
}
export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden p-4 xl:px-12 pt-6 ">
        {children}
        <Separator className="bg-green-700 my-[45px]" />
      </main>
      <Footer />
    </>
  );
}
