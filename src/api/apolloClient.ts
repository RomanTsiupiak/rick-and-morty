import { ApolloClient, InMemoryCache } from '@apollo/client';

const url = process.env.REACT_APP_API_URL;
export const apolloClient = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
