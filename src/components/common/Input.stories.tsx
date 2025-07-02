import * as React from 'react';

import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

import { Button } from './Button';
import { Input } from './Input';

// --- 기존 meta 객체 (위에서 수정한 버전) ---
const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
      description: 'HTML input 요소의 type 속성을 지정합니다.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'underline'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '입력하세요',
  },
};

export const Underline: Story = {
  args: {
    placeholder: '입력하세요',
    variant: 'underline',
  },
};

export const Password: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
      <div
        css={css`
          position: relative;
          width: 200px;
        `}
      >
        <Input {...args} type={showPassword ? 'text' : 'password'} />
        <Button
          type='button'
          onClick={toggleVisibility}
          aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          css={css`
            position: absolute;
            right: 0.2rem;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            color: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.25rem;
            width: 1.5rem;
            height: 1.5rem;
            min-width: auto;
            transition: opacity 0.2s ease-in-out;
          `}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          {showPassword ? <EyeClosedIcon size={16} /> : <EyeIcon size={16} />}
        </Button>
      </div>
    );
  },
  args: {
    placeholder: '비밀번호를 입력하세요',
  },
};
