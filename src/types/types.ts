import { Pages } from "./pages";

export interface AsideProps {
  filteredPages: Pages[];
  path: string;
}

export type SlugProps = {
  params: Promise<{ slug: string[] }>;
};
