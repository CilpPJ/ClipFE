import styled from '@emotion/styled';

export const FriendsSearchForm = () => {
  return (
    <FormContainer>
      <Description>친구를 추가하여 함께 클립을 공유해보아요!</Description>
      <SearchContainer>
        <SearchInput placeholder='닉네임을 입력해 주세요 (한글)'></SearchInput>
        <SearchButton>검색</SearchButton>
      </SearchContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  gap: 20px;
`;

const Description = styled.h4`
  font-weight: 500;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #979797;
    font-size: 15px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  cursor: pointer;
  background-color: #bfd74d;
  padding: 0px 15px;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;
