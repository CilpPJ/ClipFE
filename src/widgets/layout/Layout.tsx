import { Outlet, useMatches } from 'react-router-dom';

import styled from '@emotion/styled';

import { Header, type HeaderType, NavigateBar, ScrollToTop } from '@/shared';

type PageHandle = {
  title?: string;
  layout?: HeaderType;
};

export const Layout = () => {
  const matches = useMatches();

  const handle = matches[matches.length - 1]?.handle as PageHandle | undefined;
  const title = handle?.title;
  const layoutType = handle?.layout || 'Page';

  return (
    <PageLayout>
      <ScrollToTop />
      <Header type={layoutType} title={title} />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <NavigateBar />
    </PageLayout>
  );
};

const PageLayout = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: ${({ theme }) => theme.layout.header.height};
  padding-bottom: ${({ theme }) => theme.layout.navigation.height};
  width: 100%;
  display: flex;
  flex-direction: column;
`;
