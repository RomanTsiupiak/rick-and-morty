import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from 'api/apolloClient';

const AppProviders = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
