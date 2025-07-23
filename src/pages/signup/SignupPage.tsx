import styled from '@emotion/styled';

import { SignupForm, SignupTitleSection } from '@/entities';

export default function SignupPage() {
  return (
    <LoginPageLayout>
      <SignupTitleSection />
      <SignupForm />
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
  gap: 1rem;
`;
