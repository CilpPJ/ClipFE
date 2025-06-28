import * as React from 'react';

import { css } from '@emotion/react';
import { Slot } from '@radix-ui/react-slot';

const buttonStyles = ({ variant, size, className }: ButtonProps) => css`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition:
    background-color 150ms,
    color 150ms,
    box-shadow 150ms;
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }
  & svg:not([class*='size-']) {
    width: 1rem;
    height: 1rem;
  }
  outline: none;
  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
  }
  &[aria-invalid='true'] {
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 20%, transparent);
    border-color: var(--destructive);
  }
  .dark &[aria-invalid='true'] {
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 40%, transparent);
  }

  /* Variant Styles */
  ${variant === 'default' &&
  css`
    background-color: var(--primary);
    color: var(--primary-foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: color-mix(in srgb, var(--primary) 90%, transparent);
    }
  `}
  ${variant === 'destructive' &&
  css`
    background-color: var(--destructive);
    color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--destructive) 20%, transparent);
    }
    .dark & {
      background-color: color-mix(in srgb, var(--destructive) 60%, transparent);
    }
    .dark &:focus-visible {
      box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--destructive) 40%, transparent);
    }
  `}
  ${variant === 'outline' &&
  css`
    border: 1px solid var(--border);
    background-color: var(--background);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: color-mix(in srgb, var(--accent) 90%, transparent);
      color: var(--accent-foreground);
    }
    .dark & {
      background-color: color-mix(in srgb, var(--input) 30%, transparent);
      border-color: var(--input);
    }
    .dark &:hover {
      background-color: color-mix(in srgb, var(--input) 50%, transparent);
    }
  `}
  ${variant === 'secondary' &&
  css`
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: color-mix(in srgb, var(--secondary) 80%, transparent);
    }
  `}
  ${variant === 'ghost' &&
  css`
    &:hover {
      background-color: color-mix(in srgb, var(--accent) 90%, transparent);
      color: var(--accent-foreground);
    }
    .dark &:hover {
      background-color: color-mix(in srgb, var(--accent) 50%, transparent);
    }
  `}
  ${variant === 'link' &&
  css`
    color: var(--primary);
    text-underline-offset: 4px;
    &:hover {
      text-decoration: underline;
    }
  `}

  ${size === 'default' &&
  css`
    height: 2.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  `}
  ${size === 'sm' &&
  css`
    height: 2rem;
    border-radius: 0.375rem;
    gap: 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  `}
  ${size === 'lg' &&
  css`
    height: 2.5rem;
    border-radius: 0.375rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    &.has-\\[\\>svg\\] {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `}
  ${size === 'icon' &&
  css`
    width: 2.25rem;
    height: 2.25rem;
  `}

  ${className}
`;

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        data-slot='button'
        css={buttonStyles({ variant, size, className })}
        className={className}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
