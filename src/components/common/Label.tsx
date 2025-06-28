import * as React from 'react';

import { css } from '@emotion/react';
import * as LabelPrimitive from '@radix-ui/react-label';

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      css={css`
        display: flex; /* flex */
        align-items: center; /* items-center */
        gap: 0.5rem; /* gap-2 (8px) */
        font-size: 0.875rem; /* text-sm */
        line-height: 1.25rem; /* leading-none (tail: 1.25, shadcn: 16px) */
        font-weight: 500; /* font-medium */
        user-select: none; /* select-none */

        .group[data-disabled='true'] & {
          pointer-events: none; /* group-data-[disabled=true]:pointer-events-none */
          opacity: 0.5; /* group-data-[disabled=true]:opacity-50 */
        }

        .peer:disabled + & {
          cursor: not-allowed; /* peer-disabled:cursor-not-allowed */
          opacity: 0.5; /* peer-disabled:opacity-50 */
        }
      `}
      className={className}
      {...props}
    />
  );
}

export { Label };
