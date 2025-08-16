import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { Bell, UserRound } from 'lucide-react';

import Clip_Logo from '../../../_assets/logo/clip_logo_2.webp';
import { ROUTER_PATH } from '../../../constants';

export const MainHeader = () => {
  const navigate = useNavigate();
  // TODO: 알림 기능 추가 시 수정
  const hasNotification = true;

  return (
    <MainHeaderLayout>
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
          <UserRound size={28} strokeWidth={1.5} />
        </UserIconWrapper>
      </HeaderButtonContainer>
    </MainHeaderLayout>
  );
};
const MainHeaderLayout = styled.header`
  display: flex;
  width: ${({ theme }) => theme.width.full};
  height: ${({ theme }) => theme.layout.header.height};
  padding: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: ${({ theme }) => theme.typography.semantic.mainHeader.fontSize};
  font-family: ${({ theme }) =>
    theme.typography.semantic.mainHeader.fontFamily};
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
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
  width: 0.625rem;
  height: 0.625rem;
  background-color: ${({ theme }) => theme.colors.primitive.orange};
  border-radius: 50%;
  border: 1px solid white;
`;

const UserIconWrapper = styled.div`
  overflow: hidden;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primitive.gray[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    display: block;
    margin-top: 9px;

    fill: ${({ theme }) => theme.colors.primitive.gray[500]};
    stroke: ${({ theme }) => theme.colors.primitive.gray[500]};
  }
`;
