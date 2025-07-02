import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Common/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      css={css`
        width: 320px;
        padding: 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
      `}
    >
      <div
        css={css`
          display: grid;
          gap: 0.25rem;
        `}
      >
        <h4
          css={css`
            font-size: 0.875rem;
            line-height: 1;
            font-weight: 500;
          `}
        >
          Radix Primitives
        </h4>
        <p
          css={css`
            font-size: 0.875rem;
            color: #64748b;
          `}
        >
          An open-source UI component library.
        </p>
      </div>

      <Separator
        css={css`
          margin: 1rem 0;
        `}
      />

      <div
        css={css`
          display: flex;
          height: 1.25rem;
          align-items: center;
          gap: 1rem;
          font-size: 0.875rem;
        `}
      >
        <div>Blog</div>
        <Separator
          orientation='vertical'
          css={css`
            height: 1.25rem;
          `}
        />
        <div>Docs</div>
        <Separator
          orientation='vertical'
          css={css`
            height: 1.25rem;
          `}
        />
        <div>Source</div>
      </div>
    </div>
  ),
};
