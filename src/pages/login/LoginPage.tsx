import styled from '@emotion/styled';

import { LoginForm } from '@/entities';

export default function LoginPage() {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;
`;
