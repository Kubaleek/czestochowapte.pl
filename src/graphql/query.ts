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
      slug
    }
  }
}

`