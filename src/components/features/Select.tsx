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
        display: flex; /* flex */
        width: fit-content; /* w-fit */
        align-items: center; /* items-center */
        justify-content: space-between; /* justify-between */
        gap: 0.5rem; /* gap-2 */
        border-radius: 0.375rem; /* rounded-md */
        border: 1px solid var(--input); /* border border-input */
        background-color: transparent;
        padding: 0.5rem 0.75rem; /* px-3 py-2 */
        font-size: 0.875rem; /* text-sm */
        white-space: nowrap; /* whitespace-nowrap */
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-xs */
        transition: color, box-shadow; /* transition-[color,box-shadow] */
        outline: none; /* outline-none */

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

        &[data-placeholder] {
          color: var(
            --muted-foreground
          ); /* data-[placeholder]:text-muted-foreground */
        }

        &[data-size='default'] {
          height: 2.25rem; /* h-9 */
        }

        &[data-size='sm'] {
          height: 2rem; /* h-8 */
        }

        & [data-slot='select-value'] {
          display: flex; /* flex */
          align-items: center; /* items-center */
          gap: 0.5rem; /* gap-2 */
          display: -webkit-box;
          -webkit-line-clamp: 1; /* line-clamp-1 */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        & svg {
          pointer-events: none;
          flex-shrink: 0;
        }

        & svg:not([class*='size-']) {
          width: 1rem; /* size-4 */
          height: 1rem; /* size-4 */
        }

        & svg:not([class*='text-']) {
          color: var(--muted-foreground); /* text-muted-foreground */
        }

        .dark & {
          background-color: oklch(0 0 0 / 0.3); /* dark:bg-input/30 */
        }

        .dark &:hover {
          background-color: oklch(0 0 0 / 0.5); /* dark:hover:bg-input/50 */
        }

        .dark &[aria-invalid='true'] {
          box-shadow: 0 0 0 3px
            color-mix(in srgb, var(--destructive) 40%, transparent); /* dark:aria-invalid:ring-destructive/40 */
        }
      `}
      className={className}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='size-4 opacity-50' />
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
          position: relative; /* relative */
          z-index: 50; /* z-50 */
          max-height: var(
            --radix-select-content-available-height
          ); /* max-h-(--radix-select-content-available-height) */
          min-width: 8rem; /* min-w-[8rem] */
          transform-origin: var(--radix-select-content-transform-origin);
          overflow-x: hidden; /* overflow-x-hidden */
          overflow-y: auto; /* overflow-y-auto */
          border-radius: 0.375rem; /* rounded-md */
          border: 1px solid var(--border); /* border */
          background-color: var(--popover); /* bg-popover */
          color: var(--popover-foreground); /* text-popover-foreground */
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1); /* shadow-md */

          &[data-side='bottom'] {
            animation-name: ${slideInFromTop}; /* slide-in-from-top-2 */
          }
          &[data-side='left'] {
            animation-name: ${slideInFromRight}; /* slide-in-from-right-2 */
          }
          &[data-side='right'] {
            animation-name: ${slideInFromLeft}; /* slide-in-from-left-2 */
          }
          &[data-side='top'] {
            animation-name: ${slideInFromBottom}; /* slide-in-from-bottom-2 */
          }

          &[data-state='closed'] {
            animation-name: ${fadeOut}, ${zoomOut}; /* fade-out-0 zoom-out-95 */
            animation-duration: 200ms; /* Default Tailwind animation duration */
            animation-timing-function: cubic-bezier(
              0.4,
              0,
              0.2,
              1
            ); /* Default Tailwind ease-in-out */
            animation-fill-mode: forwards;
          }

          &[data-state='open'] {
            animation-name: ${fadeIn}, ${zoomIn}; /* fade-in-0 zoom-in-95 */
            animation-duration: 200ms; /* Default Tailwind animation duration */
            animation-timing-function: cubic-bezier(
              0.4,
              0,
              0.2,
              1
            ); /* Default Tailwind ease-in-out */
            animation-fill-mode: forwards;
          }

          ${position === 'popper' &&
          css`
            &[data-side='bottom'] {
              transform: translateY(0.25rem); /* translate-y-1 */
            }
            &[data-side='left'] {
              transform: translateX(-0.25rem); /* -translate-x-1 */
            }
            &[data-side='right'] {
              transform: translateX(0.25rem); /* translate-x-1 */
            }
            &[data-side='top'] {
              transform: translateY(-0.25rem); /* -translate-y-1 */
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
            padding: 0.25rem; /* p-1 */

            ${position === 'popper' &&
            css`
              height: var(
                --radix-select-trigger-height
              ); /* h-[var(--radix-select-trigger-height)] */
              width: 100%; /* w-full */
              min-width: var(
                --radix-select-trigger-width
              ); /* min-w-[var(--radix-select-trigger-width)] */
              scroll-margin-top: 0.25rem; /* scroll-my-1 (scroll-margin-top) */
              scroll-margin-bottom: 0.25rem; /* scroll-my-1 (scroll-margin-bottom) */
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
        padding: 0.375rem 0.5rem; /* px-2 py-1.5 */
        font-size: 0.75rem; /* text-xs */
        color: var(--muted-foreground); /* text-muted-foreground */
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
        position: relative; /* relative */
        display: flex; /* flex */
        width: 100%; /* w-full */
        cursor: default; /* cursor-default */
        align-items: center; /* items-center */
        gap: 0.5rem; /* gap-2 */
        border-radius: 0.125rem; /* rounded-sm */
        padding: 0.375rem 2rem 0.375rem 0.5rem; /* py-1.5 pr-8 pl-2 */
        font-size: 0.875rem; /* text-sm */
        outline: none; /* outline-hidden (tailwind class, assuming it means outline: none) */
        user-select: none; /* select-none */

        &:focus {
          background-color: var(--accent); /* focus:bg-accent */
          color: var(--accent-foreground); /* focus:text-accent-foreground */
        }

        &[data-disabled] {
          pointer-events: none; /* data-[disabled]:pointer-events-none */
          opacity: 0.5; /* data-[disabled]:opacity-50 */
        }

        & svg {
          pointer-events: none;
          flex-shrink: 0;
        }

        & svg:not([class*='size-']) {
          width: 1rem; /* size-4 */
          height: 1rem; /* size-4 */
        }

        & svg:not([class*='text-']) {
          color: var(--muted-foreground); /* text-muted-foreground */
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
          position: absolute; /* absolute */
          right: 0.5rem; /* right-2 */
          display: flex; /* flex */
          width: 0.875rem; /* size-3.5 */
          height: 0.875rem; /* size-3.5 */
          align-items: center; /* items-center */
          justify-content: center; /* justify-center */
        `}
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className='size-4' />
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
        pointer-events: none; /* pointer-events-none */
        margin-left: -0.25rem; /* -mx-1 */
        margin-right: -0.25rem; /* -mx-1 */
        margin-top: 0.25rem; /* my-1 */
        margin-bottom: 0.25rem; /* my-1 */
        height: 1px; /* h-px */
        background-color: var(--border); /* bg-border */
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
        display: flex; /* flex */
        cursor: default; /* cursor-default */
        align-items: center; /* items-center */
        justify-content: center; /* justify-center */
        padding-top: 0.25rem; /* py-1 */
        padding-bottom: 0.25rem; /* py-1 */
      `}
      className={className}
      {...props}
    >
      <ChevronUpIcon className='size-4' />
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
        display: flex; /* flex */
        cursor: default; /* cursor-default */
        align-items: center; /* items-center */
        justify-content: center; /* justify-center */
        padding-top: 0.25rem; /* py-1 */
        padding-bottom: 0.25rem; /* py-1 */
      `}
      className={className}
      {...props}
    >
      <ChevronDownIcon className='size-4' />
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
