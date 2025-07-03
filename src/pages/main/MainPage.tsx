import styled from '@emotion/styled';

import { LoginDialog } from '@/features';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <Container>
      <LoginDialog />
    </Container>
  );
}
