import { gql } from '@apollo/client';

export const GetCharactersList = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
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
