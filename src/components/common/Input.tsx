import * as React from 'react';

import { css } from '@emotion/react';

const baseInputStyles = css`
  display: flex;
  height: 2.25rem; /* h-9 */
  width: 100%; /* w-full */
  min-width: 0; /* min-w-0 */
  background-color: transparent;
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  font-size: 1rem; /* text-base */
  transition: color, box-shadow; /* transition-[color,box-shadow] */
  outline: none; /* outline-none */

  &::selection {
    background-color: var(--primary); /* selection:bg-primary */
    color: var(--primary-foreground); /* selection:text-primary-foreground */
  }

  &::file-selector-button {
    display: inline-flex; /* file:inline-flex */
    height: 1.75rem; /* file:h-7 */
    border: 0; /* file:border-0 */
    background-color: transparent; /* file:bg-transparent */
    font-size: 0.875rem; /* file:text-sm */
    font-weight: 500; /* file:font-medium */
    color: var(--foreground); /* file:text-foreground */
  }

  &::placeholder {
    color: var(--muted-foreground); /* placeholder:text-muted-foreground */
  }

  &:disabled {
    pointer-events: none; /* disabled:pointer-events-none */
    cursor: not-allowed; /* disabled:cursor-not-allowed */
    opacity: 0.5; /* disabled:opacity-50 */
  }

  @media (min-width: 768px) {
    font-size: 0.875rem; /* md:text-sm */
  }

  .dark & {
    background-color: oklch(
      0 0 0 / 0.3
    ); /* CSS variable --input is oklch(1 0 0 / 15%), so this matches dark:bg-input/30 */
  }
`;

const getInputVariantStyles = (variant: InputProps['variant']) => {
  if (variant === 'default') {
    return css`
      border-radius: 0.375rem; /* rounded-md */
      border: 1px solid var(--input); /* border border-input */
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */

      &:focus-visible {
        border-color: var(--ring); /* focus-visible:border-ring */
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring) 50%, transparent); /* focus-visible:ring-[2px] focus-visible:ring-ring/50 */
      }

      &[aria-invalid='true'] {
        border-color: var(--destructive); /* aria-invalid:border-destructive */
        box-shadow: 0 0 0 2px
          color-mix(in srgb, var(--destructive) 20%, transparent); /* aria-invalid:ring-destructive/20 */
      }
      .dark &[aria-invalid='true'] {
        box-shadow: 0 0 0 2px
          color-mix(in srgb, var(--destructive) 40%, transparent); /* dark:aria-invalid:ring-destructive/40 */
      }
    `;
  } else if (variant === 'underline') {
    return css`
      border: 0; /* border-0 */
      border-bottom: 1px solid var(--input); /* border-b border-input */
      border-radius: 0; /* rounded-none */
      box-shadow: none; /* shadow-none */
      padding-left: 0.75rem; /* px-3 */
      padding-right: 0.75rem; /* px-3 */
      font-size: 0.875rem; /* text-sm */

      &:focus-visible {
        border-bottom-color: var(--ring); /* focus-visible:border-b-ring */
        border-bottom-width: 2px; /* focus-visible:border-b-2 */
        box-shadow: none; /* focus-visible:ring-0 */
      }

      &[aria-invalid='true'] {
        border-bottom-color: var(
          --destructive
        ); /* aria-invalid:border-b-destructive */
        border-bottom-width: 2px; /* aria-invalid:border-b-2 */
        box-shadow: none; /* aria-invalid:ring-0 */
      }
    `;
  }
  return '';
};

export interface InputProps extends React.ComponentProps<'input'> {
  variant?: 'default' | 'underline';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', type, ...props }, ref) => {
    const combinedStyles = css`
      ${baseInputStyles}
      ${getInputVariantStyles(variant)}
    `;

    return (
      <input
        type={type}
        data-slot='input'
        ref={ref}
        css={combinedStyles}
        className={className}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
