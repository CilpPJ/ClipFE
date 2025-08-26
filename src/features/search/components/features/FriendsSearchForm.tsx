import styled from '@emotion/styled';
import { Search } from 'lucide-react';

export const FriendsSearchForm = () => {
  return (
    <FriendSearchForm>
      <Description>친구를 추가하여 함께 클립을 공유해보아요!</Description>
      <SearchInputContainer>
        <SearchInput placeholder='닉네임을 입력해 주세요 (한글)' />
        <SearchButton>
          <Search size={24} color='white' />
        </SearchButton>
      </SearchInputContainer>
    </FriendSearchForm>
  );
};

const FriendSearchForm = styled.form`
  display: flex;
  width: ${({ theme }) => theme.width.full};
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Description = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.thin};
`;

const SearchInputContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.width.full};
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SearchInput = styled.input`
  width: ${({ theme }) => theme.width.full};
  padding-left: ${({ theme }) => theme.spacing[4]};
  height: ${({ theme }) => theme.height.md};
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.039);

  &::placeholder {
    color: ${({ theme }) => theme.colors.primitive.gray[500]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.clip};
  border-radius: 5px;
  width: 35px;
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;
