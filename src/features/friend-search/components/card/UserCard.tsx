import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Check } from 'lucide-react';

type Props = {
  text: string;
  isFriend: boolean;
  onToggleFriend: () => void;
};

export const UserCard = ({ text, isFriend, onToggleFriend }: Props) => {
  const theme = useTheme();

  return (
    <CardContainer>
      <UserName>{text}</UserName>
      <UserAdd onClick={onToggleFriend} isFriend={isFriend}>
        {isFriend ? (
          <CheckBox>
            <Check size={20} color={theme.colors.brand.clip} />
            <span>친구</span>
          </CheckBox>
        ) : (
          <span>친구추가</span>
        )}
      </UserAdd>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
`;

const UserName = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const UserAdd = styled.button<{ isFriend: boolean }>`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;

  background-color: ${(props) =>
    props.isFriend
      ? props.theme.colors.primitive.white
      : props.theme.colors.brand.clip};
  color: ${(props) =>
    props.isFriend
      ? props.theme.colors.brand.clip
      : props.theme.colors.primitive.black};

  &:focus {
    outline: none;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
