import styled from '@emotion/styled';

export const LoginTitleSection = () => {
  return (
    <LoginTitleSectionBox>
      <TitleText>우리만의 지식 네트워크</TitleText>
      <TitleText>Clip에서 함께 시작하세요!</TitleText>
    </LoginTitleSectionBox>
  );
};

const LoginTitleSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;
