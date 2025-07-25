import styled from '@emotion/styled';

import { LoginForm, LoginTitleSection, SocialLoginSection } from '@/entities';

export default function LoginPage() {
  return (
    <LoginPageLayout>
      <LoginTitleSection />
      <LoginForm />
      <SocialLoginSection />
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
