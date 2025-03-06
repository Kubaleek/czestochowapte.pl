import { gql } from "@apollo/client";

export const GET_ALL_NAVS = gql`
  query GetAllNavs {
    menu(id: "MainMenu", idType: NAME) {
      menuItems(first: 500) {
        edges {
          node {
            label
            url
            parentId
            childItems {
              edges {
                node {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;


export const GET_ALL_PAGES = gql`
query GetContentPages{
  pages(first: 1000) {
    nodes {
      id
      title
      content
      uri
      slug
      __typename
    }
  }
}

`

export const GET_ALL_POSTS = gql`
query GetContentPosts{
  posts(first: 1000) {
    nodes {
      id
      title
      uri
      content
      slug
      __typename
    }
  }
}
`