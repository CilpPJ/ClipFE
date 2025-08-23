import styled from '@emotion/styled';

import { UserCard } from '@/entities/friend/UserCard';

export const UserList = () => {
  return (
    <ListContainer>
      <Description>검색결과</Description>
      <UserCard text='김클립'></UserCard>
      <UserCard text='김도비'></UserCard>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Description = styled.h3`
  font-weight: 700;
`;
