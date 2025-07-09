import { MemoryRouter } from 'react-router-dom';

import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavigateBar } from './NavigateBar';

const meta = {
  title: 'Components/Features/Layouts/NavigateBar',
  component: NavigateBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div
          css={css`
            width: 100%;
            height: 100vh;
            background-color: var(--background-primary);
          `}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NavigateBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NavigateBar />,
};
