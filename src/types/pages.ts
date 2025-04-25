export interface Pages {
  title: string;
  slug: string;
  content: string;
  category: {
    name: string;
  };
}

export interface PagesResponse {
  pages: Pages[];
}
