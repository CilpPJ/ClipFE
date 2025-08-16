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
  width: ${({ theme }) => theme.width.full};
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[2]};
`;

const FriendListHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.width.full};
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const FriendListHeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

const FriendListHeaderDescription = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const FriendListHeaderDescriptionWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.width.full};
  align-items: center;
  justify-content: space-between;
`;

const FriendListHeaderEdit = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.primitive.blue};
`;

const FriendListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  width: ${({ theme }) => theme.width.full};
  padding: ${({ theme }) => theme.spacing[5]} 0;
  justify-items: center;
`;

const FriendListCard = styled.div`
  display: flex;
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.primitive.white};
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
`;
