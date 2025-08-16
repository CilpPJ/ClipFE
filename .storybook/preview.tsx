import React from 'react';

import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react-vite';

import '../src/index.css';
import { theme } from '../src/shared';
import '../src/shared/theme/reset.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      exclude: ['role'],
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            fontFamily: `'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 'Nanum Gothic', '나눔고딕', 'Noto Sans KR', '돋움', Dotum, Arial, sans-serif`,
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
