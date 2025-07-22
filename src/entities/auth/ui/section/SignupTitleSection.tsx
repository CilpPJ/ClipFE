import styled from '@emotion/styled';

import ClipLogo from '@/shared/_assets/logo/clip_3d.webp';

export const SignupTitleSection = () => {
  return (
    <SignupTitleSectionBox>
      <ImageItem src={ClipLogo} alt='Clip Logo' />
      <TitleText>
        지금 가입하고 첫 링크를 <LogoText>Clip</LogoText> 해보세요!
      </TitleText>
    </SignupTitleSectionBox>
  );
};

const SignupTitleSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 2rem;
  object-fit: cover;
`;

const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-family: 'BnviitLasik';
  color: var(--secondary);
  padding: 0 4px;
`;
