import * as React from 'react';

import { css, keyframes } from '@emotion/react';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      css={css`
        animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; /* animate-pulse */
        border-radius: 0.375rem; /* rounded-md */
        background-color: var(--accent); /* bg-accent */
      `}
      className={className}
      {...props}
    />
  );
}

export { Skeleton };
