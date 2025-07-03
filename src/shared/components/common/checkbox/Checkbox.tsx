import * as React from 'react';

import { css } from '@emotion/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

export function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      css={css`
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid var(--input);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        transition: box-shadow;
        outline: none;

        &:focus-visible {
          border-color: var(--ring);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
          outline: none;
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

        &[data-state='checked'] {
          border-color: var(--primary);
          background-color: var(--primary);
          color: var(--primary-foreground);
        }

        .dark & {
          background-color: oklch(0 0 0 / 0.3);
        }

        .dark &[aria-invalid='true'] {
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 40%, transparent);
        }

        .dark &[data-state='checked'] {
          background-color: var(--primary);
        }
      `}
      className={className}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
          transition: none;

          & > svg {
            width: 0.875rem;
            height: 0.875rem;
          }
        `}
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

Checkbox.displayName = CheckboxPrimitive.Root.displayName;
