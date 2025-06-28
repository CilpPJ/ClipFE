import * as React from 'react';

import { css } from '@emotion/react';
import { Slot } from '@radix-ui/react-slot';

const buttonStyles = ({ variant, size, className }: ButtonProps) => css`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
  white-space: nowrap;
  border-radius: 0.375rem; /* rounded-md */
  font-size: var(--font-size-sm); /* text-sm */
  font-weight: 500; /* font-medium */
  transition: all;
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }
  & svg:not([class*='size-']) {
    width: 1rem; /* size-4 */
    height: 1rem; /* size-4 */
  }
  outline: none;
  &:focus-visible {
    border-color: var(--ring); /* focus-visible:border-ring */
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent); /* focus-visible:ring-ring/50 focus-visible:ring-[3px] */
  }
  &[aria-invalid='true'] {
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 20%, transparent); /* aria-invalid:ring-destructive/20 */
    border-color: var(--destructive); /* aria-invalid:border-destructive */
  }
  .dark &[aria-invalid='true'] {
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 40%, transparent); /* dark:aria-invalid:ring-destructive/40 */
  }

  /* Variant Styles */
  ${variant === 'default' &&
  css`
    background-color: var(--primary);
    color: var(--primary-foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */
    &:hover {
      background-color: color-mix(in srgb, var(--primary) 90%, transparent);
    }
  `}
  ${variant === 'destructive' &&
  css`
    background-color: var(--destructive);
    color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */
    &:hover {
      background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--destructive) 20%, transparent); /* focus-visible:ring-destructive/20 */
    }
    .dark & {
      background-color: color-mix(
        in srgb,
        var(--destructive) 60%,
        transparent
      ); /* dark:bg-destructive/60 */
    }
    .dark &:focus-visible {
      box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--destructive) 40%, transparent); /* dark:focus-visible:ring-destructive/40 */
    }
  `}
  ${variant === 'outline' &&
  css`
    border: 1px solid var(--border);
    background-color: var(--background);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */
    &:hover {
      background-color: color-mix(in srgb, var(--accent) 90%, transparent);
      color: var(--accent-foreground);
    }
    .dark & {
      background-color: color-mix(
        in srgb,
        var(--input) 30%,
        transparent
      ); /* dark:bg-input/30 */
      border-color: var(--input); /* dark:border-input */
    }
    .dark &:hover {
      background-color: color-mix(
        in srgb,
        var(--input) 50%,
        transparent
      ); /* dark:hover:bg-input/50 */
    }
  `}
  ${variant === 'secondary' &&
  css`
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */
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
      background-color: color-mix(
        in srgb,
        var(--accent) 50%,
        transparent
      ); /* dark:hover:bg-accent/50 */
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
    height: 2.25rem; /* h-9 */
    padding-left: 1rem; /* px-4 */
    padding-right: 1rem; /* px-4 */
    padding-top: 0.5rem; /* py-2 */
    padding-bottom: 0.5rem; /* py-2 */
    &.has-\\[\\>svg\\] {
      /* has-[>svg]:px-3 */
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  `}
  ${size === 'sm' &&
  css`
    height: 2rem; /* h-8 */
    border-radius: 0.375rem; /* rounded-md */
    gap: 0.375rem; /* gap-1.5 */
    padding-left: 0.75rem; /* px-3 */
    padding-right: 0.75rem; /* px-3 */
    &.has-\\[\\>svg\\] {
      /* has-[>svg]:px-2.5 */
      padding-left: 0.625rem;
      padding-right: 0.625rem;
    }
  `}
  ${size === 'lg' &&
  css`
    height: 2.5rem; /* h-10 */
    border-radius: 0.375rem; /* rounded-md */
    padding-left: 1.5rem; /* px-6 */
    padding-right: 1.5rem; /* px-6 */
    &.has-\\[\\>svg\\] {
      /* has-[>svg]:px-4 */
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `}
  ${size === 'icon' &&
  css`
    width: 2.25rem; /* size-9 */
    height: 2.25rem; /* size-9 */
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
