type MenuItemNode = {
  label: string;
  url: string;
  parentId: string | null;
  childItems: {
    edges: Array<{
      label: ReactNode;
      node: {
        label: string;
        url: string;
      };
    }>;
  };
};

type MenuEdges = {
  node: MenuItemNode;
};

type Menu = {
  menuItems: {
    edges: MenuEdges[];
  };
};

type MenuQueryResponse = {
  menu: Menu;
};


interface Circle {
  cx: number;
  cy: number;
}

type MapProps = {
  activeCircles: Circle[];
}

interface CityTypes {
  name: string;
  email: string;
  tel: string;
  address: string;
  numberaccount: string;
  nip: string;
  krs: string;
  regon: string;
  url: string;
}

type City = {
  [city: string]: CityTypes;
}
interface GetContentPagesResponse {
  pages: {
    nodes: {
      id: string;
      title: string;
      uri: string;
      __typename: string
      content: string;
      slug: string;
    }[];
  };
}

interface GetContentPostsResponse {
  posts: {
    nodes: {
      id: string;
      title: string;
      uri: string;
      __typename: string
      content: string;
      slug: string;
    }[];
  };
}



interface SiteConfig {
  name: string;
  description: string;
  url: string;
  creator: string;
  keywords: string[];
  authors: {
      name: string;
      url: string;
  }[];
  links?: {
      github: string | undefined;
  };
};


