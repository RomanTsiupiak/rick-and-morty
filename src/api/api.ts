import { gql } from '@apollo/client';

export const GetSomeCharacters = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;
