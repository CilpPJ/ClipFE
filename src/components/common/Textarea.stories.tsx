import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { Label } from './Label';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Common/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: '입력 필드에 표시될 안내 문구입니다.',
    },
    disabled: {
      control: 'boolean',
      description: 'Textarea를 비활성화합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <Textarea
      {...args}
      css={css`
        width: 350px;
      `}
    />
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled.',
    disabled: true,
  },
  render: (args) => (
    <Textarea
      {...args}
      css={css`
        width: 350px;
      `}
    />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div
      css={css`
        display: grid;
        width: 350px;
        gap: 0.5rem;
      `}
    >
      <Label htmlFor='message'>Your Message</Label>
      <Textarea id='message' placeholder='Type your message here.' />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div
      css={css`
        display: grid;
        width: 350px;
        gap: 0.5rem;
      `}
    >
      <Label htmlFor='message-2'>Your Message</Label>
      <Textarea id='message-2' placeholder='Type your message here.' />
      <p
        css={css`
          font-size: 0.8rem;
          color: #64748b;
        `}
      >
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div
      css={css`
        display: grid;
        width: 350px;
        gap: 0.75rem;
      `}
    >
      <Textarea placeholder='Type your message here.' />
      <Button
        css={css`
          justify-self: end;
        `}
      >
        Send message
      </Button>
    </div>
  ),
};
