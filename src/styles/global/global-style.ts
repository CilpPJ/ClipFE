import { css } from '@emotion/react';

// fontSize 정의
const fontSizeXXl = '1.5rem'; // 24px
const fontSizeXl = '1.25rem'; // 20px
const fontSizeLg = '1.125rem'; // 18px
const fontSizeMd = '1rem'; // 16px
const fontSizeSm = '0.875rem'; // 14px
const fontSizeXs = '0.75rem'; // 12px

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-size-xxl: ${fontSizeXXl};
    --font-size-xl: ${fontSizeXl};
    --font-size-lg: ${fontSizeLg};
    --font-size-md: ${fontSizeMd};
    --font-size-sm: ${fontSizeSm};
    --font-size-xs: ${fontSizeXs};
  }
`;
