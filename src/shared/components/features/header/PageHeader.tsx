import styled from '@emotion/styled';

import { HeaderLayout } from '../../../styles';

type Props = {
  title?: string;
};

export const PageHeader = ({ title }: Props) => {
  return (
    <HeaderLayout>
      <TitleWrapper>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
    </HeaderLayout>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 1.5rem;
`;
