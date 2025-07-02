import * as React from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'rect' | 'circle';
  className?: string;
}

const StyledSkeleton = styled.div<SkeletonProps>`
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-color: var(--accent, #e5e7eb);

  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  border-radius: ${({ variant }) =>
    variant === 'circle' ? '50%' : '0.375rem'};
`;

const Skeleton = React.forwardRef<HTMLElement, SkeletonProps>(
  ({ ...props }) => {
    return <StyledSkeleton {...props} />;
  },
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
