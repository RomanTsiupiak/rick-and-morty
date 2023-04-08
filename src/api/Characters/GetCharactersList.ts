import { gql } from '@apollo/client';

export const GetCharactersList = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        gender
        status
      }
    }
  }
`;
