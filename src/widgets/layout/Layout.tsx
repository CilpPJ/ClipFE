import { Outlet, useMatches } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  HEADER_HEIGHT,
  Header,
  NAVIGATE_BAR_HEIGHT,
  NavigateBar,
  ScrollToTop,
} from '@/shared';

type Props = {
  pageType: 'Main' | 'Page';
};

type PageTitle = {
  title: string;
};

export const Layout = ({ pageType = 'Page' }: Props) => {
  const matches = useMatches();

  const handle = matches[matches.length - 1]?.handle as PageTitle | undefined;
  const title = handle?.title;

  return (
    <PageLayout>
      <ScrollToTop />
      <Header pageType={pageType} title={title} />
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
  margin-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${NAVIGATE_BAR_HEIGHT}px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
