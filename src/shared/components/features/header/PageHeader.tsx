import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { ChevronLeft } from 'lucide-react';

import { ROUTER_PATH } from '../../../constants';

type Props = {
  title?: string;
};

export const PageHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <PageHeaderLayout>
      <IconWrapper>
        <ChevronLeft size={25} onClick={() => navigate(ROUTER_PATH.MAIN)} />
      </IconWrapper>
      <TitleWrapper>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
    </PageHeaderLayout>
  );
};

const PageHeaderLayout = styled.header`
  display: flex;
  width: ${({ theme }) => theme.width.full};
  height: ${({ theme }) => theme.layout.header.height}px;
  padding: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: ${({ theme }) => theme.typography.semantic.pageHeader.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.semantic.pageHeader.fontWeight};
  font-family: ${({ theme }) =>
    theme.typography.semantic.pageHeader.fontFamily};
`;
