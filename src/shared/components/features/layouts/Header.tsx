import styled from '@emotion/styled';

import { LoginDialog, SignupDialog } from '@/features';

export const HEADER_HEIGHT = 60;

export const Header = () => {
  return (
    <HeaderLayout>
      <h1>CLIP</h1>
      <HeaderButtonWrapper>
        <LoginDialog />
        <SignupDialog />
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
  gap: 1rem;
`;

const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
