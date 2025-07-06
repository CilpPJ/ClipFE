import { CookiesProvider } from 'react-cookie';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const ApplicationProvider = ({ children }: Props) => {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </CookiesProvider>
  );
};
