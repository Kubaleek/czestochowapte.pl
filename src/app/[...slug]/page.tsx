"use client";

import { useQuery } from "@apollo/client";
import { PagesResponse } from "@/types/pages";
import { GET_PAGES, GET_POSTS } from "@/graphql/query";
import { notFound, usePathname } from "next/navigation";
import { PostsResponse } from "@/types/posts";
import Aside from "@/components/slug/aside";
import SlugContent from "@/components/slug/content";
import SlugLoading from "@/components/loading/loading";
import AsideLoading from "@/components/loading/aside-loading";

export default function SlugPage() {
  const path = usePathname();
  const { data: pagesData } = useQuery<PagesResponse>(GET_PAGES, { pollInterval: 5000 });
  const { data: postsData } = useQuery<PostsResponse>(GET_POSTS, { pollInterval: 5000 });


  if(!pagesData || !postsData){
    return (
      <div className="grid grid-cols-12 h-fit gap-[12px] md:gap-[48px]">
        <AsideLoading />
        <SlugLoading />
      </div>
    )
  }

  const pages = pagesData?.pages || [];
  const posts = postsData?.articles || [];

  
  const currentPage = pages.find((page) => `/${page.slug}` === path);
  const currentPost = posts.find((post) => `/${post.slug}` === path);

  const currentCategory = currentPage?.category?.name;

  // Filtrujemy strony, które mają tę samą kategorię
  const filteredPages = currentCategory ? pages.filter((page) => page.category?.name === currentCategory) : [];


  const content = (() => {
    if (currentPage && Array.isArray(currentPage.content)) {
      return currentPage.content;
    }
    if (currentPost && Array.isArray(currentPost.content)) {
      return currentPost.content;
    }
    return [];
  })();
  
  
  if (!currentPage && !currentPost) {
    return notFound();
  }

  return (
    <div className="grid grid-cols-12 h-fit gap-[12px] md:gap-[48px]">
      {filteredPages.length > 0 ? <Aside filteredPages={filteredPages} path={path} /> : (
        <div className="col-span-12 md:col-span-4 xl:col-span-3 flex flex-col gap-2 py-[10px] px-[10px]" />
      )}
      <SlugContent page={currentPage} posts={currentPost} content={content} />
    </div>
  );
}
