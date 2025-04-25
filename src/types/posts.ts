export interface Post {
  title: string;
  slug: string;
  content: string;
  pages: {
    title: string;
    slug: string;
  };
}

export interface PostsResponse {
  articles: Post[];
}
