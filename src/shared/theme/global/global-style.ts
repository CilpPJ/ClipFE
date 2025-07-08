import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  body {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 480px;
    background-color: var(--background-primary);
    font-family: var(--font-pretendard);
    color: var(--foreground);

    @media (width >= 768px) {
      max-width: 768px;
    }
  }
`;
