import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Clip_Logo from '../../../_assets/logo/clip_logo_2.webp';
import { ROUTER_PATH } from '../../../constants';
import { Button } from '../../common';

export const HEADER_HEIGHT = 60;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <TitleWrapper>
        <LogoImage src={Clip_Logo} alt='Clip Logo' />
        <TitleText>Clip</TitleText>
      </TitleWrapper>
      {/* TODO: 임시로 추가한 부분이며 추후 제거해야함 */}
      <HeaderButtonWrapper>
        <Button variant='outline' onClick={() => navigate(ROUTER_PATH.LOGIN)}>
          로그인
        </Button>
        <Button variant='outline' onClick={() => navigate(ROUTER_PATH.SIGN_UP)}>
          회원가입
        </Button>
      </HeaderButtonWrapper>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  display: flex;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const TitleText = styled.h1`
  font-size: 1.5rem;
  font-family: 'bnviitlasik';
`;
