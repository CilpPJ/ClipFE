import styled from '@emotion/styled';

import Clip_Logo from '@/shared/_assets/logo/clip_3d.webp';

type Props = {
  nickname: string;
};

export const DescriptionSection = ({ nickname }: Props) => {
  return (
    <DescriptionBox>
      <DescriptionContainer>
        <DescriptionText>
          <b>{nickname}</b>님,
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
  width: ${({ theme }) => theme.width.full};
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[7]} 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const DescriptionText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 106px;
  height: auto;
`;
