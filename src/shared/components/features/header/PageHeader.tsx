import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { ChevronLeft } from 'lucide-react';

import { ROUTER_PATH } from '../../../constants';
import { HEADER_HEIGHT } from '../../../styles';

type Props = {
  title?: string;
};

export const PageHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <PageHeaderLayout>
      <ChevronLeft size={25} onClick={() => navigate(ROUTER_PATH.MAIN)} />
      <TitleWrapper>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
    </PageHeaderLayout>
  );
};

const PageHeaderLayout = styled.header`
  display: flex;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;
