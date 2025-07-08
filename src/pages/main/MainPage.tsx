import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';

import { RECENT_CLIP_CARD_MOCK } from '@/entities';
import { LoginDialog, RecentClipCardSection, SignupDialog } from '@/features';
import { NavigateBar, NavigateBarHeight } from '@/shared';

export default function MainPage() {
  const onClickGhost = () => {
    alert('👻 우헤헤! 👻');
  };
  return (
    <MainPageLayout>
      <Container>
        <Header>
          <h1>CLIP</h1>
          <HeaderButtonWrapper>
            <LoginDialog />
            <SignupDialog />
          </HeaderButtonWrapper>
        </Header>
        <DescriptionSection>
          <DescriptionContainer>
            <DescriptionText>
              <b>클리퍼</b>님,
            </DescriptionText>
            <DescriptionWrapper>
              <DescriptionText>
                저장했던 <b>2개의 클립</b>이
              </DescriptionText>
              <DescriptionText>기다리고 있어요!</DescriptionText>
            </DescriptionWrapper>
          </DescriptionContainer>
          <span
            css={css`
              font-size: 5rem;
            `}
            onClick={onClickGhost}
          >
            👻
          </span>
        </DescriptionSection>
        <RecentClipSection>
          <RecentClipHeader>
            <span
              css={css`
                font-size: 18px;
              `}
            >
              <b>클리퍼</b>님이 최근 저장한 클립
            </span>
            <ChevronRight />
          </RecentClipHeader>
          <RecentClipCardContainer>
            {Array.from({ length: 10 }).map((_, index) => (
              <RecentClipCardSection
                key={index}
                thumbnail={RECENT_CLIP_CARD_MOCK.thumbnail}
                tag={RECENT_CLIP_CARD_MOCK.tagName}
                title={RECENT_CLIP_CARD_MOCK.title}
                memo={RECENT_CLIP_CARD_MOCK.memo}
              />
            ))}
          </RecentClipCardContainer>
          <FriendListSection>
            <FriendListHeader>
              <FriendListHeaderTitle>
                클리퍼님의 친구 목록
              </FriendListHeaderTitle>
              <FriendListHeaderDescriptionWrapper>
                <FriendListHeaderDescription>
                  친구와 공유한 클립을 확인해보아요!
                </FriendListHeaderDescription>
                <FriendListHeaderEdit>순서 편집</FriendListHeaderEdit>
              </FriendListHeaderDescriptionWrapper>
            </FriendListHeader>
            <FriendListContainer>
              {Array.from({ length: 10 }).map((_, index) => (
                <FriendListCard key={index}>클리퍼{index + 1}</FriendListCard>
              ))}
            </FriendListContainer>
          </FriendListSection>
        </RecentClipSection>
      </Container>
      <NavigateBar />
    </MainPageLayout>
  );
}

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: ${NavigateBarHeight}px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const DescriptionSection = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DescriptionText = styled.span`
  font-size: 24px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecentClipSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

const RecentClipHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const RecentClipCardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 174px;
  gap: 1rem;
  padding: 1rem 10px;
  overflow-x: auto;
  align-items: start;
  justify-content: start;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FriendListSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 1rem 10px;
`;

const FriendListHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.5rem;
`;

const FriendListHeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const FriendListHeaderDescription = styled.span`
  font-size: 16px;
`;

const FriendListHeaderDescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const FriendListHeaderEdit = styled.span`
  font-size: 14px;
  color: #007aff;
`;

const FriendListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 10px 0;
`;

const FriendListCard = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 10px;
  background-color: #fff;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
`;
