import styled from '@emotion/styled';

import {
  DescriptionSection,
  FriendListSection,
  RecentClipSection,
} from '@/features';

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
  align-items: center;
  justify-content: center;
`;
