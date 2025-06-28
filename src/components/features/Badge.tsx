import * as React from 'react';

import { css } from '@emotion/react';
import { Slot } from '@radix-ui/react-slot';

const baseBadgeStyles = css`
  display: inline-flex; /* inline-flex */
  align-items: center; /* items-center */
  justify-content: center; /* justify-center */
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid transparent; /* default border, variant might override */
  padding: 0.125rem 0.5rem; /* px-2 py-0.5 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 500; /* font-medium */
  width: fit-content; /* w-fit */
  white-space: nowrap; /* whitespace-nowrap */
  flex-shrink: 0; /* shrink-0 */
  gap: 0.25rem; /* gap-1 */
  transition:
    color 150ms,
    box-shadow 150ms;
  overflow: hidden; /* overflow-hidden */
  outline: none; /* Implicit from no explicit outline */

  & > svg {
    width: 0.75rem; /* size-3 */
    height: 0.75rem; /* size-3 */
    pointer-events: none; /* pointer-events-none */
  }

  &:focus-visible {
    border-color: var(--ring); /* focus-visible:border-ring */
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent); /* focus-visible:ring-[3px] focus-visible:ring-ring/50 */
    outline: none; /* Ensure no default outline */
  }

  &[aria-invalid='true'] {
    border-color: var(--destructive); /* aria-invalid:border-destructive */
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 20%, transparent); /* aria-invalid:ring-destructive/20 */
  }

  .dark &[aria-invalid='true'] {
    box-shadow: 0 0 0 3px
      color-mix(in srgb, var(--destructive) 40%, transparent); /* dark:aria-invalid:ring-destructive/40 */
  }
`;

const badgeVariantStyles = {
  default: css`
    border-color: transparent; /* border-transparent */
    background-color: var(--primary); /* bg-primary */
    color: var(--primary-foreground); /* text-primary-foreground */
    &[as='a']:hover {
      background-color: oklch(
        var(--primary-h) var(--primary-s) var(--primary-l) / 0.9
      ); /* Primary color with 90% opacity for hover */
    }
  `,
  secondary: css`
    border-color: transparent; /* border-transparent */
    background-color: var(--secondary); /* bg-secondary */
    color: var(--secondary-foreground); /* text-secondary-foreground */
    &[as='a']:hover {
      background-color: oklch(
        var(--secondary-h) var(--secondary-s) var(--secondary-l) / 0.9
      ); /* Secondary color with 90% opacity for hover */
    }
  `,
  destructive: css`
    border-color: transparent; /* border-transparent */
    background-color: var(--destructive); /* bg-destructive */
    color: white; /* text-white */
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
    color: var(--foreground); /* text-foreground */
    border: 1px solid var(--input); /* Restore border for outline variant, assuming it needs one based on common outline design */
    background-color: transparent; /* Ensure transparent background */

    &[as='a']:hover {
      background-color: var(--accent);
      color: var(--accent-foreground); /* [a&]:hover:text-accent-foreground */
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
