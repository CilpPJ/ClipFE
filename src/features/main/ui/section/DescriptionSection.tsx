import styled from '@emotion/styled';

import Clip_Logo from '@/shared/_assets/logo/clip_3d.webp';

export const DescriptionSection = () => {
  return (
    <DescriptionBox>
      <DescriptionContainer>
        <DescriptionText>
          <b>클리퍼</b>님,
        </DescriptionText>
        <DescriptionWrapper>
          <DescriptionText>
            저장했던 <b>2개의 클립</b>이
          </DescriptionText>
          <DescriptionText>기다리고 있어요!</DescriptionText>
        </DescriptionWrapper>
      </DescriptionContainer>
      <LogoImage src={Clip_Logo} alt='Clip Logo' />
    </DescriptionBox>
  );
};

const DescriptionBox = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DescriptionText = styled.span`
  font-size: 24px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 106px;
  height: auto;
`;
