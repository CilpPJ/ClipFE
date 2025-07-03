import * as React from 'react';

import { css } from '@emotion/react';
import * as LabelPrimitive from '@radix-ui/react-label';

export function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      css={css`
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        user-select: none;

        .group[data-disabled='true'] & {
          pointer-events: none;
          opacity: 0.5;
        }

        .peer:disabled + & {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}
      className={className}
      {...props}
    />
  );
}

Label.displayName = LabelPrimitive.Root.displayName;
