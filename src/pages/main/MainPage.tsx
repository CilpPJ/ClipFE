import styled from '@emotion/styled';

import {
  DescriptionSection,
  FriendListSection,
  RecentClipSection,
} from '@/features';
import { HEADER_HEIGHT, NavigateBarHeight } from '@/shared';

export default function MainPage() {
  return (
    <MainPageLayout>
      <DescriptionSection />
      <RecentClipSection />
      <FriendListSection />
    </MainPageLayout>
  );
}

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 100%;
  height: calc(100dvh - ${HEADER_HEIGHT}px);
  align-items: center;
  justify-content: center;
  margin-bottom: calc(${NavigateBarHeight}px + 2rem);
`;
