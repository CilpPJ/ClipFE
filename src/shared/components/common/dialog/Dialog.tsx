import * as React from 'react';

import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

const DialogAnimations = () => (
  <Global
    styles={css`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      @keyframes zoomIn {
        from {
          transform: translate(-50%, -50%) scale(0.95);
        }
        to {
          transform: translate(-50%, -50%) scale(1);
        }
      }
      @keyframes zoomOut {
        from {
          transform: translate(-50%, -50%) scale(1);
        }
        to {
          transform: translate(-50%, -50%) scale(0.95);
        }
      }
    `}
  />
);

const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: oklch(0 0 0 / 0.5);

  &[data-state='closed'] {
    animation: fadeOut 200ms ease-out forwards;
  }
  &[data-state='open'] {
    animation: fadeIn 200ms ease-in forwards;
  }
`;

const StyledDialogContent = styled(DialogPrimitive.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  display: grid;
  width: 100%;
  max-width: calc(100% - 2rem);
  transform: translate(-50%, -50%);
  gap: 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background-color: var(--background);
  padding: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &[data-state='closed'] {
    animation:
      fadeOut 200ms ease-out forwards,
      zoomOut 200ms ease-out forwards;
  }
  &[data-state='open'] {
    animation:
      fadeIn 200ms ease-in forwards,
      zoomIn 200ms ease-in forwards;
  }

  @media (min-width: 640px) {
    max-width: 32rem;
  }
`;

const StyledDialogCloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: var(--radius-xs);
  opacity: 0.7;
  outline: none;
  transition: opacity 200ms ease-in-out;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    opacity: 1;
  }

  &:focus {
    box-shadow:
      0 0 0 2px var(--ring),
      0 0 0 4px var(--background);
  }

  &:disabled {
    pointer-events: none;
  }

  &[data-state='open'] {
    background-color: var(--accent);
    color: var(--muted-foreground);
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }
`;

const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const StyledDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledDialogTitle = styled(DialogPrimitive.Title)`
  font-size: var(--font-size-lg);
  line-height: 1.25;
  font-weight: 600;
`;

const StyledDialogDescription = styled(DialogPrimitive.Description)`
  font-size: var(--font-size-sm);
  color: var(--muted-foreground);
`;

export function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return (
    <>
      <DialogAnimations />
      <DialogPrimitive.Root data-slot='dialog' {...props} />
    </>
  );
}

export function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />;
}

export function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />;
}

export function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot='dialog-close' {...props} />;
}

export function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <StyledDialogOverlay
      data-slot='dialog-overlay'
      className={className}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />
      <StyledDialogContent
        data-slot='dialog-content'
        className={className}
        {...props}
      >
        {children}
        {showCloseButton && (
          <StyledDialogCloseButton data-slot='dialog-close'>
            <XIcon />
          </StyledDialogCloseButton>
        )}
      </StyledDialogContent>
    </DialogPortal>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <StyledDialogHeader
      data-slot='dialog-header'
      className={className}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <StyledDialogFooter
      data-slot='dialog-footer'
      className={className}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <StyledDialogTitle
      data-slot='dialog-title'
      className={className}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <StyledDialogDescription
      data-slot='dialog-description'
      className={className}
      {...props}
    />
  );
}
