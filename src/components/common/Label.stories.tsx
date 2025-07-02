import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Common/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'Label Text',
  },
};

export const LabelWithCheckbox: Story = {
  args: {
    htmlFor: 'input-id',
    children: (
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 0.5rem;
        `}
      >
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>
    ),
  },
};
