import { css } from '@emotion/react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

export const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      css={css`
        --normal-bg: var(--popover);
        --normal-text: var(--popover-foreground);
        --normal-border: var(--border);
      `}
      {...props}
    />
  );
};

Toaster.displayName = 'Toaster';
