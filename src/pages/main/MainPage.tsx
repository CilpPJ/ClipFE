import { Navigate } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  DescriptionSection,
  FriendListSection,
  RecentClipSection,
} from '@/features';
import { ROUTER_PATH, useNicknameStore } from '@/shared';

export default function MainPage() {
  const nickname = useNicknameStore((state) => state.nickname);

  if (!nickname) {
    return <Navigate to={ROUTER_PATH.LOGIN} />;
  }

  return (
    <MainPageLayout>
      <DescriptionSection nickname={nickname} />
      <RecentClipSection nickname={nickname} />
      <FriendListSection nickname={nickname} />
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
