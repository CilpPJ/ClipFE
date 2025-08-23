import { useState } from 'react';

import styled from '@emotion/styled';

interface UserCardProps {
  text: string;
}

interface UserAddProps {
  isFriend: boolean;
}

export const UserCard = ({ text }: UserCardProps) => {
  const [isFriend, setIsFriend] = useState(false);

  const handleToggleFriend = () => {
    setIsFriend(!isFriend);
  };

  return (
    <CardContainer>
      <UserName>{text}</UserName>
      <UserAdd onClick={handleToggleFriend} isFriend={isFriend}>
        {isFriend ? '친구' : '친구추가'}
      </UserAdd>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
`;

const UserName = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

const UserAdd = styled.button<UserAddProps>`
  background-color: #bfd74d;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.isFriend ? 'white' : '#bfd74d')};
  color: ${(props) => (props.isFriend ? '#bfd74d' : 'black')};

  &:focus {
    outline: none;
  }
`;
