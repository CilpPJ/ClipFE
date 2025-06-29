import * as React from 'react';

import { css } from '@emotion/react';
import { Slot } from '@radix-ui/react-slot';

const baseBadgeStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 0.25rem;
  transition:
    color 150ms,
    box-shadow 150ms;
  overflow: hidden;
  outline: none;

  & > svg {
    width: 0.75rem;
    height: 0.75rem;
    pointer-events: none;
  }

  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
    outline: none;
  }

  &[aria-invalid='true'] {
    border-color: var(--destructive);
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 20%, transparent);
  }

  .dark &[aria-invalid='true'] {
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 40%, transparent);
  }
`;

const badgeVariantStyles = {
  default: css`
    border-color: transparent;
    background-color: var(--primary);
    color: var(--primary-foreground);
    &[as='a']:hover {
      background-color: oklch(
        var(--primary-h) var(--primary-s) var(--primary-l) / 0.9
      );
    }
  `,
  secondary: css`
    border-color: transparent;
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    &[as='a']:hover {
      background-color: oklch(
        var(--secondary-h) var(--secondary-s) var(--secondary-l) / 0.9
      );
    }
  `,
  destructive: css`
    border-color: transparent;
    background-color: var(--destructive);
    color: white;
    &[as='a']:hover {
      background-color: color-mix(in srgb, var(--destructive) 90%, transparent);
    }
    &:focus-visible {
      box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--destructive) 20%, transparent);
    }
    .dark &:focus-visible {
      box-shadow: 0 0 0 3px
        color-mix(in srgb, var(--destructive) 40%, transparent);
    }
    .dark & {
      background-color: color-mix(in srgb, var(--destructive) 60%, transparent);
    }
  `,
  outline: css`
    color: var(--foreground);
    border: 1px solid var(--input);
    background-color: transparent;

    &[as='a']:hover {
      background-color: var(--accent);
      color: var(--accent-foreground);
    }
  `,
};

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

interface BadgeProps extends React.ComponentProps<'span'> {
  variant?: BadgeVariant;
  asChild?: boolean;
}

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot='badge'
      css={css`
        ${baseBadgeStyles}
        ${badgeVariantStyles[variant]}
      `}
      className={className}
      {...props}
    />
  );
}

export { Badge };
