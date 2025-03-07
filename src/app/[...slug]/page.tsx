"use client"
    
import { GET_ALL_NAVS, GET_ALL_PAGES, GET_ALL_POSTS } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { Separator } from "@/components/shadcn/separator";
import { notFound, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { convertToLocalhost } from "@/lib/convertLocal";

export default function SlugPage() {

  const params = useParams<{slug: string[]}>()
  const path = usePathname();

  
  const slug = params.slug;

  const isCategory = slug && slug.length >= 2 && slug[0] !== slug[1];
  
  const { data, loading, error } = useQuery<GetContentPagesResponse>(GET_ALL_PAGES, {
    variables: { slug: slug.join('/') },
  });
  

  const {data: postsData, loading: postsLoading, error: postsError} = useQuery<GetContentPostsResponse>(GET_ALL_POSTS);
  const {data: navData, loading: navLoading, error: navError} = useQuery<MenuQueryResponse>(GET_ALL_NAVS);

  const pages = data?.pages.nodes || [];
  const posts = postsData?.posts.nodes || [];
  const navs = navData?.menu.menuItems?.edges || [];


  
  const page = pages.find(
    (page) => page.uri === `/${slug.join('/')}`
  );

  
  const post = posts.find((post) => post.slug === slug[0]);

  if (loading || postsLoading || navLoading) {
    return (
      <div>
        <div className="grid grid-cols-12 gap-[24px] md:gap-[48px]">
          {isCategory ? (
            <aside className="col-span-12 md:col-span-4 xl:col-span-3 flex flex-col gap-2 py-[40px] px-[20px]">
              <div className="h-4  bg-gray-300 animate-pulse rounded"></div>
              <div className="h-full bg-gray-300 animate-pulse rounded"></div>
            </aside>
          ) : <div className="col-span-12 md:col-span-4 xl:col-span-3" />}
          <section className="col-span-12 md:col-span-8 xl:col-span-9 bg-white py-[40px] px-[20px]">
            <div className="flex flex-col gap-3">
                <div>
                    <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-6 w-full bg-gray-300 animate-pulse rounded mt-2"></div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="h-10 w-10 bg-gray-300 animate-pulse rounded shadow"></div>
                    <div className="h-10 w-10 bg-gray-300 animate-pulse rounded shadow"></div>
                    <div className="h-10 w-10 bg-gray-300 animate-pulse rounded shadow"></div>
                </div>
                {/* Skeleton dla treści */}
                <div className="content flex flex-col gap-3">
                    <div className="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
                </div>
            </div>
          </section>
        </div>
        <Separator className="bg-green-700 my-[45px]" />
      </div>
    )        
  }
  
  if (error || postsError || navError) {
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
            {isCategory ? (
              <aside className="col-span-12 md:col-span-4 xl:col-span-3 flex flex-col gap-2 md:py-[40px] px-[20px] md:px-0">
                <p>
                    <Link href="/" className="flex flex-row items-center group lg:hover:underline transition-all ease duration-300 !font-light !text-[16px]">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-fw inline-block text-[#2d2f2d] text-[12px] mx-[3px] h-[1.25em] mr-2 transition-transform duration-300 group-hover:translate-x-[-2px] group-hover:text-[#17842f]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path>
                        </svg>
                        Powrót do strony głównej
                    </Link>
                </p>
                <div className="p-3 px-4 py-3 relative rounded border border-[#17842f] bg-white">
                <ul className="flex flex-col space-y-3 px-2 py-2 justify-center">
                    {navs
                    .filter((nav) => nav.node.url.includes(slug[0])) 
                    .map((nav) => {
                      return nav.node.childItems.edges.map((subnavs, j) => {
                        const isActive = path === new URL(subnavs.node.url).pathname; 
                      
                        return (
                          <li key={j}>
                            <Link
                              href={convertToLocalhost(subnavs.node.url)}  
                              className={`text-sm ${j === 0 ? 'pt-0' : 'py-[15px]'} relative transition-all ease-linear duration-300 rounded ${isActive ? 'text-[#17842f] underline' : 'hover:underline hover:text-[#17842f]'}`}
                            >
                              {subnavs.node.label} 
                            </Link>
                          </li>
                        );
                      });
                    })}
                 </ul>
                </div>
              </aside>
            ) : <div className="col-span-12 md:col-span-4 xl:col-span-3" />}
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
