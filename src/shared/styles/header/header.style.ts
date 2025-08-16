import styled from '@emotion/styled';

export const HEADER_HEIGHT = 60;

export const HeaderLayout = styled.header`
  display: flex;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
