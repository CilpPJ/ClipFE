import styled from '@emotion/styled';

import { LoginDialog, SignupDialog } from '@/features';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <Container>
      <LoginDialog />
      <SignupDialog />
    </Container>
  );
}
