import styled from '@emotion/styled';

export const FriendListSection = () => {
  return (
    <FriendListBox>
      <FriendListHeader>
        <FriendListHeaderTitle>클리퍼님의 친구 목록</FriendListHeaderTitle>
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
    </FriendListBox>
  );
};

const FriendListBox = styled.section`
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
