import { useState } from 'react';

import styled from '@emotion/styled';

import { UserCard } from '@/entities/friend/UserCard';

export const UserList = () => {
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
  margin: 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Description = styled.h3`
  font-weight: 700;
`;
