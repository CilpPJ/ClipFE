import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Common/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: '스켈레톤의 너비 (e.g., "250px", 100)',
    },
    height: {
      control: 'text',
      description: '스켈레톤의 높이 (e.g., "16px", 16)',
    },
    variant: {
      control: 'select',
      options: ['rect', 'circle'],
      description: '스켈레톤의 모양을 선택합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 256,
    height: 16,
    variant: 'rect',
  },
};

export const Circle: Story = {
  args: {
    width: 64,
    height: 64,
    variant: 'circle',
  },
};

export const ProfileCard: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        width: fit-content;
      `}
    >
      <Skeleton variant='circle' width={48} height={48} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}
      >
        <Skeleton width={250} height={16} />
        <Skeleton width={200} height={16} />
      </div>
    </div>
  ),
};
