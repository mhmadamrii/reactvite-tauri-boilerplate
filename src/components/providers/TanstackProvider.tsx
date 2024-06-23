import React from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ThemeProvider } from './ThemeProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a query client
const queryClient = new QueryClient();

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
      >
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
