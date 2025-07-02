import * as React from 'react';

import { css, keyframes } from '@emotion/react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const slideInFromTop = keyframes`
  from { transform: translateY(-0.5rem); }
  to { transform: translateY(0); }
`;

const slideInFromBottom = keyframes`
  from { transform: translateY(0.5rem); }
  to { transform: translateY(0); }
`;

const slideInFromLeft = keyframes`
  from { transform: translateX(-0.5rem); }
  to { transform: translateX(0); }
`;

const slideInFromRight = keyframes`
  from { transform: translateX(0.5rem); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

const zoomOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0.95); }
`;

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot='select' {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot='select-group' {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />;
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot='select-trigger'
      data-size={size}
      css={css`
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        border-radius: 0.375rem;
        border: 1px solid var(--input);
        background-color: transparent;
        padding: 0 0.75rem;
        font-size: 0.875rem;
        white-space: nowrap;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        transition:
          color 150ms,
          box-shadow 150ms;
        outline: none;

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

        &[data-placeholder] {
          color: var(--muted-foreground);
        }

        &[data-size='default'] {
          height: 2.25rem;
        }

        &[data-size='sm'] {
          height: 2rem;
        }

        & [data-slot='select-value'] {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        & svg {
          pointer-events: none;
          flex-shrink: 0;
        }

        & svg:not([class*='size-']) {
          width: 1rem;
          height: 1rem;
        }

        & svg:not([class*='text-']) {
          color: var(--muted-foreground);
        }

        .dark & {
          background-color: color-mix(in srgb, var(--input) 30%, transparent);
        }

        .dark &:hover {
          background-color: color-mix(in srgb, var(--input) 50%, transparent);
        }

        .dark &[aria-invalid='true'] {
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 40%, transparent);
        }
      `}
      className={className}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon
          css={css`
            width: 0.875rem;
            height: 0.875rem;
            opacity: 0.5;
          `}
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot='select-content'
        css={css`
          position: relative;
          z-index: 50;
          max-height: var(--radix-select-content-available-height);
          min-width: 8rem;
          transform-origin: var(--radix-select-content-transform-origin);
          overflow-x: hidden;
          overflow-y: auto;
          border-radius: 0.375rem;
          border: 1px solid var(--border);
          background-color: var(--popover);
          color: var(--popover-foreground);
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);

          &[data-side='bottom'] {
            animation-name: ${slideInFromTop};
          }
          &[data-side='left'] {
            animation-name: ${slideInFromRight};
          }
          &[data-side='right'] {
            animation-name: ${slideInFromLeft};
          }
          &[data-side='top'] {
            animation-name: ${slideInFromBottom};
          }

          &[data-state='closed'] {
            animation-name: ${fadeOut}, ${zoomOut};
            animation-duration: 200ms;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-fill-mode: forwards;
          }

          &[data-state='open'] {
            animation-name: ${fadeIn}, ${zoomIn};
            animation-duration: 200ms;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-fill-mode: forwards;
          }

          ${position === 'popper' &&
          css`
            &[data-side='bottom'] {
              transform: translateY(0.25rem);
            }
            &[data-side='left'] {
              transform: translateX(-0.25rem);
            }
            &[data-side='right'] {
              transform: translateX(0.25rem);
            }
            &[data-side='top'] {
              transform: translateY(-0.25rem);
            }
          `}
        `}
        className={className}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          css={css`
            padding: 0.25rem;

            ${position === 'popper' &&
            css`
              height: var(--radix-select-trigger-height);
              width: 100%;
              min-width: var(--radix-select-trigger-width);
              scroll-margin-top: 0.25rem;
              scroll-margin-bottom: 0.25rem;
            `}
          `}
          className={className}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot='select-label'
      css={css`
        padding: 0.375rem 0.5rem;
        font-size: 0.75rem;
        color: var(--muted-foreground);
      `}
      className={className}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot='select-item'
      css={css`
        position: relative;
        display: flex;
        width: 100%;
        cursor: default;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.125rem; /* rounded-sm */
        padding: 0.375rem 2rem 0.375rem 0.5rem;
        font-size: 0.875rem;
        outline: none;
        user-select: none;

        &:focus {
          background-color: var(--accent);
          color: var(--accent-foreground);
        }

        &[data-disabled] {
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

        & svg:not([class*='text-']) {
          color: var(--muted-foreground);
        }

        & span:last-child {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}
      className={className}
      {...props}
    >
      <span
        css={css`
          position: absolute;
          right: 0.5rem;
          display: flex;
          width: 0.875rem;
          height: 0.875rem;
          align-items: center;
          justify-content: center;

          & > svg {
            width: 0.875rem;
            height: 0.875rem;
          }
        `}
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot='select-separator'
      css={css`
        pointer-events: none;
        margin-left: -0.25rem;
        margin-right: -0.25rem;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        height: 1px;
        background-color: var(--border);
      `}
      className={className}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot='select-scroll-up-button'
      css={css`
        display: flex;
        cursor: default;
        align-items: center;
        justify-content: center;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;

        & > svg {
          width: 0.875rem;
          height: 0.875rem;
        }
      `}
      className={className}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      css={css`
        display: flex;
        cursor: default;
        align-items: center;
        justify-content: center;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;

        & > svg {
          width: 0.875rem;
          height: 0.875rem;
        }
      `}
      className={className}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
