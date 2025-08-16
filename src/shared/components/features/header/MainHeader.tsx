import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { Bell, UserRound } from 'lucide-react';

import Clip_Logo from '../../../_assets/logo/clip_logo_2.webp';
import { ROUTER_PATH } from '../../../constants';
import { HeaderLayout } from '../../../styles';

export const MainHeader = () => {
  const navigate = useNavigate();
  // TODO: 알림 기능 추가 시 수정
  const hasNotification = true;

  return (
    <HeaderLayout>
      <TitleContainer>
        <LogoImage src={Clip_Logo} alt='Clip Logo' />
        <TitleText>Clip</TitleText>
      </TitleContainer>
      <HeaderButtonContainer>
        <NotificationIconWrapper>
          <Bell size={24} />
          {hasNotification && <NotificationDot />}
        </NotificationIconWrapper>
        <UserIconWrapper onClick={() => navigate(ROUTER_PATH.SETTING)}>
          <UserRound size={28} color='white' strokeWidth={1.5} />
        </UserIconWrapper>
      </HeaderButtonContainer>
    </HeaderLayout>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 1.5rem;
  font-family: 'BnviitLasik';
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const NotificationIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotificationDot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #ff9500;
  border-radius: 50%;
  border: 1px solid white;
`;

const UserIconWrapper = styled.div`
  overflow: hidden;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    display: block;
    margin-top: 9px;

    fill: #979797;
    stroke: #979797;
  }
`;
