import * as React from 'react';

import { css } from '@emotion/react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      css={css`
        position: relative; /* relative */
        display: flex; /* flex */
        width: 2rem; /* size-8 (32px) */
        height: 2rem; /* size-8 (32px) */
        flex-shrink: 0; /* shrink-0 */
        overflow: hidden; /* overflow-hidden */
        border-radius: 9999px; /* rounded-full */
      `}
      className={className}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      css={css`
        aspect-ratio: 1 / 1; /* aspect-square */
        width: 100%; /* size-full */
        height: 100%; /* size-full */
      `}
      className={className}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      css={css`
        display: flex; /* flex */
        width: 100%; /* size-full */
        height: 100%; /* size-full */
        align-items: center; /* items-center */
        justify-content: center; /* justify-content */
        border-radius: 9999px; /* rounded-full */
        background-color: var(--muted); /* bg-muted */
      `}
      className={className}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
