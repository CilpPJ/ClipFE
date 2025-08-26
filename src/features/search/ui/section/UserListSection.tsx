import { useState } from 'react';

import styled from '@emotion/styled';

import { UserCard } from '../../components';

export const UserListSection = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: '김클립', isFriend: false },
    { id: 2, name: '김도비', isFriend: true },
  ]);

  const handleToggleFriend = (clickedId: number) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === clickedId
        ? { ...friend, isFriend: !friend.isFriend }
        : friend,
    );
    setFriends(updatedFriends);
  };

  return (
    <ListContainer>
      <Description>검색결과</Description>
      {friends.map((friend) => (
        <UserCard
          key={friend.id}
          text={friend.name}
          isFriend={friend.isFriend}
          onToggleFriend={() => handleToggleFriend(friend.id)}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: ${({ theme }) => theme.width.full};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Description = styled.h3`
  width: ${({ theme }) => theme.width.full};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;
