import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { FolderSearch, Home, Paperclip, Plus, UserSearch } from 'lucide-react';

import { ROUTER_PATH } from '../../../constants';

type Tab = 'HOME' | 'CLIP' | 'SEARCH' | 'FRIEND_SEARCH';

type ButtonItem = {
  tab: Tab;
  icon: React.ElementType;
  text: string;
  path: string;
};

const BUTTON_LIST: ButtonItem[] = [
  {
    tab: 'HOME',
    icon: Home,
    text: 'HOME',
    path: ROUTER_PATH.ROOT,
  },
  {
    tab: 'CLIP',
    icon: Paperclip,
    text: 'CLIP',
    path: ROUTER_PATH.CLIP,
  },
  {
    tab: 'SEARCH',
    icon: FolderSearch,
    text: 'SEARCH',
    path: ROUTER_PATH.SEARCH,
  },
  {
    tab: 'FRIEND_SEARCH',
    icon: UserSearch,
    text: 'FRIEND_SEARCH',
    path: ROUTER_PATH.FRIEND_SEARCH,
  },
];

export const NavigateBar = () => {
  const [activeTab, setActiveTab] = useState<Tab>('HOME');

  const navigate = useNavigate();

  const onClickButton = (tab: Tab) => {
    setActiveTab(tab);

    navigate(BUTTON_LIST.find((button) => button.tab === tab)?.path ?? '');
  };

  const renderNavItems = (buttons: ButtonItem[]) => {
    return buttons.map((button) => {
      const Icon = button.icon;
      const isActive = activeTab === button.tab;

      return (
        <NavItem
          key={button.tab}
          active={isActive}
          onClick={() => onClickButton(button.tab)}
        >
          <Icon size={26} strokeWidth={1.5} />
          <NavItemText active={isActive}>{button.text}</NavItemText>
          {isActive && <ActiveIndicator />}
        </NavItem>
      );
    });
  };

  return (
    <NavContainer>
      <FabButton aria-label='Add new item'>
        <Plus size={26} strokeWidth={3} />
      </FabButton>

      <Nav>
        <NavItemsWrapper>
          <LeftItems>{renderNavItems(BUTTON_LIST.slice(0, 2))}</LeftItems>

          <CenterGap />

          <RightItems>{renderNavItems(BUTTON_LIST.slice(2, 4))}</RightItems>
        </NavItemsWrapper>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: ${({ theme }) => theme.layout.navigation.height};
`;

const Nav = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width.full};
  max-width: 500px; /* 데스크탑 뷰를 위한 최대 너비 */
  height: 65px;
  background-color: ${({ theme }) => theme.colors.primitive.white};
  border-radius: 20px 20px 0 0; /* 상단 모서리만 둥글게 */

  &::before {
    content: '';
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 45px;
    border-radius: 0 0 40px 40px;
    box-shadow: 0 35px 0 0 ${({ theme }) => theme.colors.primitive.gray[100]};
  }
`;

const NavItemsWrapper = styled.div`
  display: flex;
  height: ${({ theme }) => theme.height.full};
  align-items: center;
`;

const NavItemText = styled.span<{ active?: boolean }>`
  font-size: 12px;
  font-weight: ${({ active }) => (active ? 600 : 400)};
  color: ${({ active }) => (active ? '#99b33c' : '#212121')};
  transition:
    color 0.2s,
    font-weight 0.2s;
`;

const LeftItems = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const RightItems = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const CenterGap = styled.div`
  width: 80px;
`;

const FabButton = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.brand.clip};
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: 300;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(191, 215, 77, 0.4);
  z-index: 10;
  transition: background-color 0.2s;

  &:hover {
    background-color: #99b33c;
  }
`;

const NavItem = styled.button<{ active: boolean }>`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${({ active }) => (active ? '#99b33c' : '#333')};
  transition: color 0.2s;
  outline: none;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #99b33c;
  border-radius: 50%;
  z-index: -1;
`;
