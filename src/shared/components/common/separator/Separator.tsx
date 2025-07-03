'use client';

import * as React from 'react';

import { css } from '@emotion/react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot='separator'
      decorative={decorative}
      orientation={orientation}
      css={css`
        flex-shrink: 0;
        background-color: var(--border);

        &[data-orientation='horizontal'] {
          height: 1px;
          width: 100%;
        }

        &[data-orientation='vertical'] {
          height: 100%;
          width: 1px;
        }
      `}
      className={className}
      {...props}
    />
  );
}

Separator.displayName = SeparatorPrimitive.Root.displayName;
