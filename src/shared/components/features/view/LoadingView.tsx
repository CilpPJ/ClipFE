import styled from '@emotion/styled';

import { Spinner } from '../../common';

export const LoadingView = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  width: 100%;
  // TODO: header의 높이 만큼 빼기
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  padding: 80px 16px;
`;
