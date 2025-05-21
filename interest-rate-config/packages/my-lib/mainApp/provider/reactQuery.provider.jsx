import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '../../SalesOnline/config/reactQuery.config';

export const ReactQueryWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};