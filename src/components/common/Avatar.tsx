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
        position: relative;
        display: flex;
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 9999px;
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
        aspect-ratio: 1 / 1;
        width: 100%;
        height: 100%;
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
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background-color: var(--muted);
      `}
      className={className}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
