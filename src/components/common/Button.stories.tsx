import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mail } from 'lucide-react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Cancel',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Learn More',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Go to Settings',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        <Mail />
        Login with Email
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: <Mail />,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    children: 'Cannot Click',
    disabled: true,
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href='https://google.com' target='_blank' rel='noreferrer'>
        Go to Google
      </a>
    ),
  },
  render: (args) => <Button {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button {...args} size='lg'>
        Large
      </Button>
      <Button {...args} size='default'>
        Default
      </Button>
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='icon'>
        <Mail />
      </Button>
    </div>
  ),
  args: {
    variant: 'default',
  },
};
