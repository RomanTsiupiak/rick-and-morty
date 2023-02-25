import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const AppProviders = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
