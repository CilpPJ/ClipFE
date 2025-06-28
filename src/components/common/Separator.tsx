'use client';

import * as React from 'react';

import { css } from '@emotion/react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

function Separator({
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
        flex-shrink: 0; /* shrink-0 */
        background-color: var(--border); /* bg-border */

        /* data-[orientation=horizontal] */
        &[data-orientation='horizontal'] {
          height: 1px; /* h-px */
          width: 100%; /* w-full */
        }

        /* data-[orientation=vertical] */
        &[data-orientation='vertical'] {
          height: 100%; /* h-full */
          width: 1px; /* w-px */
        }
      `}
      className={className}
      {...props}
    />
  );
}

export { Separator };
