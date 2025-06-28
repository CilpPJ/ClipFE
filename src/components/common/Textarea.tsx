import * as React from 'react';

import { css } from '@emotion/react';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      css={css`
        display: flex;
        field-sizing: content;
        min-height: 4rem;
        width: 100%;
        border-radius: 0.375rem;
        border: 1px solid var(--input);
        background-color: transparent;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        transition:
          color 150ms,
          box-shadow 150ms;
        outline: none;

        &::placeholder {
          color: var(--muted-foreground);
        }

        &:focus-visible {
          border-color: var(--ring);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        &[aria-invalid='true'] {
          border-color: var(--destructive);
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 20%, transparent);
        }

        @media (min-width: 768px) {
          font-size: 0.875rem;
        }

        .dark & {
          background-color: color-mix(in srgb, var(--input) 30%, transparent);
        }

        .dark &[aria-invalid='true'] {
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 40%, transparent);
        }
      `}
      className={className}
      {...props}
    />
  );
}

export { Textarea };
