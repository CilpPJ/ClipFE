import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { SOCIAL_LOGIN_URL } from '@/shared';

import GOOGLE_SYMBOL from '../../../_assets/google-symbol.webp';
import KAKAO_SYMBOL from '../../../_assets/kakao-symbol.webp';
import NAVER_SYMBOL from '../../../_assets/naver-symbol.webp';

type Variant = 'google' | 'naver' | 'kakao';

const socialAssetMap = {
  google: {
    icon: GOOGLE_SYMBOL,
    styles: css`
      background-color: #fff;
      border: 1px solid #dcdcdc;
      padding: 12px;
    `,
  },
  naver: {
    icon: NAVER_SYMBOL,
    styles: css`
      background-color: #03c75a;
    `,
  },
  kakao: {
    icon: KAKAO_SYMBOL,
    styles: css`
      background-color: #fee500;
    `,
  },
};

type Props = {
  variant: Variant;
} & React.ComponentPropsWithoutRef<'a'>;

export const SocialLoginButton = ({ variant, ...props }: Props) => {
  const { icon, styles } = socialAssetMap[variant];

  return (
    <LoginButtonBox
      customStyles={styles}
      href={SOCIAL_LOGIN_URL(variant)}
      {...props}
    >
      <LoginButtonIcon alt={`${variant} login`} src={icon} />
    </LoginButtonBox>
  );
};

const LoginButtonBox = styled.a<{ customStyles: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  ${({ customStyles }) => customStyles}
`;

const LoginButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
