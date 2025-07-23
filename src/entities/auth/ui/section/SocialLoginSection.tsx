import styled from '@emotion/styled';

import { SocialLoginButton } from '../components';

export const SocialLoginSection = () => {
  return (
    <SocialLoginBox>
      <SeparatorWrapper>
        <Line />
        <Text>간편로그인</Text>
        <Line />
      </SeparatorWrapper>
      <LoginWrapper>
        <SocialLoginButton variant='google' target='_self' />
        <SocialLoginButton variant='naver' target='_self' />
        <SocialLoginButton variant='kakao' target='_self' />
      </LoginWrapper>
    </SocialLoginBox>
  );
};

const SocialLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const Line = styled.hr`
  flex-grow: 1;
  height: 1px;
  border: none;
  background-color: oklch(0.8779 0.0026 228.79);
`;

const Text = styled.span`
  flex-shrink: 0;
  font-size: 0.875rem;
  color: oklch(0.5735 0.0152 263.31);
`;
