"use client"
    
import { GET_ALL_PAGES, GET_ALL_POSTS } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { Separator } from "@/components/shadcn/separator";
import { notFound, useParams } from "next/navigation";

export default function SlugPage() {

  const params = useParams<{slug: string[]}>()
  
  const slug = params.slug;
  
  const { data, loading, error } = useQuery<GetContentPagesResponse>(GET_ALL_PAGES, {
    variables: { slug: slug.join('/') },
  });

  const {data: postsData, loading: postsLoading, error: postsError} = useQuery<GetContentPostsResponse>(GET_ALL_POSTS);

  const pages = data?.pages.nodes || [];
  const posts = postsData?.posts.nodes || [];

  
  const page = pages.find(
    (page) => page.uri === `/${slug.join('/')}`
  );
  
  const post = posts.find((post) => post.slug === slug[0]);

  if (loading || postsLoading) {
    return null;
  }
  
  if (error || postsError) {
    return null;
  }

  if (!page && !post) {
    return notFound();
  }
  




  const replaceUrls = (content: string) => {
    return content
      .replace(/<img[^>]+src="http:\/\/localhost:3000\/([^"]+)"/g, (_, p1) => `<img src="http://czestochowaptecmspl.local/${p1}"`)
      .replace(/<a[^>]+href="http:\/\/czestochowaptecmspl.local\/([^"]+)"/g, (_, p1) => `<a href="http://localhost:3000/${p1}"`);
  }
  
  const processedContentPage = replaceUrls(page?.content || '');
  const processedContentPosts = replaceUrls(post?.content || '');
  
  return (
    <div>
        <div className="grid grid-cols-12 gap-[24px] md:gap-[48px]">
            <div className="col-span-12 md:col-span-4 xl:col-span-3" />
            <section className="col-span-12 md:col-span-8 xl:col-span-9 bg-white py-[40px] px-[20px]">
                <div className="flex flex-col gap-3">
                    <div>
                        <h2 className="text-lg font-bold text-[#17822e] break-words">{page?.title || post?.title}</h2>
                        <h1 className="text-xl md:text-3xl font-bold">{page?.title || post?.title}</h1>
                    </div>
                    <div className="flex flex-row gap-2">
                    <a href={"https://twitter.com/PTE_ZK"} className="bg-[#17822e] p-2 text-white inline-block rounded shadow justify-center items-center" aria-label="twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                    <a href={"https://www.facebook.com/profile.php?id=100064391691386"} className="bg-[#17822e] p-2 text-white inline-block rounded shadow justify-center items-center" aria-label="facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href={"https://www.linkedin.com/company/polskie-towarzystwo-ekonomiczne/?originalSubdomain=pl"} className="bg-[#17822e] p-2 text-white inline-block rounded shadow justify-center items-center" aria-label="linkedin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    </div>
                    <div className="content flex flex-col gap-3" dangerouslySetInnerHTML={{__html: processedContentPage || processedContentPosts}} />
                </div>
            </section>
        </div>
        <Separator className="bg-green-700 my-[45px]" />
    </div>
  );
}
