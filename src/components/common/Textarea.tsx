import * as React from 'react';

import { css } from '@emotion/react';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      css={css`
        display: flex; /* flex */
        field-sizing: content; /* field-sizing-content */
        min-height: 4rem; /* min-h-16 (64px) */
        width: 100%; /* w-full */
        border-radius: 0.375rem; /* rounded-md */
        border: 1px solid var(--input); /* border border-input */
        background-color: transparent;
        padding: 0.5rem 0.75rem; /* px-3 py-2 */
        font-size: 1rem; /* text-base */
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */
        transition: color, box-shadow; /* transition-[color,box-shadow] */
        outline: none; /* outline-none */

        &::placeholder {
          color: var(
            --muted-foreground
          ); /* placeholder:text-muted-foreground */
        }

        &:focus-visible {
          border-color: var(--ring); /* focus-visible:border-ring */
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent); /* focus-visible:ring-[3px] focus-visible:ring-ring/50 */
        }

        &:disabled {
          cursor: not-allowed; /* disabled:cursor-not-allowed */
          opacity: 0.5; /* disabled:opacity-50 */
        }

        &[aria-invalid='true'] {
          border-color: var(
            --destructive
          ); /* aria-invalid:border-destructive */
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 20%, transparent); /* aria-invalid:ring-destructive/20 */
        }

        @media (min-width: 768px) {
          font-size: 0.875rem; /* md:text-sm */
        }

        .dark & {
          background-color: oklch(0 0 0 / 0.3); /* dark:bg-input/30 */
        }

        .dark &[aria-invalid='true'] {
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 40%, transparent); /* dark:aria-invalid:ring-destructive/40 */
        }
      `}
      className={className}
      {...props}
    />
  );
}

export { Textarea };
