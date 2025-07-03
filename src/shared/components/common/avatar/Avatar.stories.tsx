import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar, AvatarImage } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <AvatarImage src='https://github.com/shadcn.png' />,
  },
};
