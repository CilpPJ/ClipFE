import * as React from 'react';

import { css } from '@emotion/react';

const baseInputStyles = css`
  display: flex;
  height: 2.25rem;
  width: 100%;
  min-width: 0;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  transition:
    color 150ms,
    box-shadow 150ms;
  outline: none;

  &::selection {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }

  &::file-selector-button {
    display: inline-flex;
    height: 1.75rem;
    border: 0;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--foreground);
  }

  &::placeholder {
    color: var(--muted-foreground);
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  .dark & {
    background-color: color-mix(in srgb, var(--input) 30%, transparent);
  }
`;

const getInputVariantStyles = (variant: InputProps['variant']) => {
  if (variant === 'default') {
    return css`
      border-radius: 0.375rem;
      border: 1px solid var(--input);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

      &:focus-visible {
        border-color: var(--ring);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring) 50%, transparent);
      }

      &[aria-invalid='true'] {
        border-color: var(--destructive);
        box-shadow: 0 0 0 2px
          color-mix(in srgb, var(--destructive) 20%, transparent);
      }
      .dark &[aria-invalid='true'] {
        box-shadow: 0 0 0 2px
          color-mix(in srgb, var(--destructive) 40%, transparent);
      }
    `;
  } else if (variant === 'underline') {
    return css`
      border: 0;
      border-bottom: 1px solid var(--input);
      border-radius: 0;
      box-shadow: none;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      font-size: 0.875rem;

      &:focus-visible {
        border-bottom-color: var(--ring);
        border-bottom-width: 2px;
        box-shadow: none;
      }

      &[aria-invalid='true'] {
        border-bottom-color: var(--destructive);
        border-bottom-width: 2px;
        box-shadow: none;
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
