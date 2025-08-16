import { CookiesProvider } from 'react-cookie';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient, theme } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const ApplicationProvider = ({ children }: Props) => {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
          <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
};

const AppLayout = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;

  @media (width >= 768px) {
    max-width: 768px;
  }
`;
