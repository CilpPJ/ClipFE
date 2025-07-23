import styled from '@emotion/styled';

import Logo from '@/shared/_assets/logo/clip_3d.webp';

export const LoginTitleSection = () => {
  return (
    <LoginTitleSectionBox>
      <LogoImage src={Logo} alt='Clip Logo' />
      <TitleText>우리만의 지식 네트워크</TitleText>
      <TitleText>
        <LogoText>Clip</LogoText>에서 함께 시작하세요!
      </TitleText>
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
  margin-bottom: 12px;
`;
const LogoText = styled.span`
  font-size: 20px;
  font-family: 'BnviitLasik';
  color: var(--secondary);
  padding: 0 4px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 2rem 0;
`;
