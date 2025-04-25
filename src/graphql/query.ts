import { gql } from "@apollo/client";

export const GET_INITIATIVES = gql`
  query InitiativeSections {
    inicjatywySekcjas {
      url
      image {
        url
        name
      }
    }
  }
`;

export const GET_PARTNERS = gql`
  query Partners {
    partners {
      url
      image {
        url
        name
      }
    }
  }
`;

export const GET_PAGES = gql`
query Pages {
  pages(pagination: { limit: 1000 }) {
    title
    slug
    content
    category {
      name
    }
  }
}
`

export const GET_POSTS = gql`
query Articles {
  articles {
    title
    slug
    content
    pages {
      title
      slug
    }
  }
}
`