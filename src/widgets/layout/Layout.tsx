import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  HEADER_HEIGHT,
  Header,
  NAVIGATE_BAR_HEIGHT,
  NavigateBar,
  ScrollToTop,
} from '@/shared';

export const Layout = () => {
  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
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
