import type { Meta, StoryObj } from '@storybook/react-vite';

import { RECENT_CLIP_CARD_MOCK } from '@/entities';

import { RecentClipCard } from './RecentClipCard';

const meta: Meta<typeof RecentClipCard> = {
  title: 'Components/Features/Card/ClipCard',
  component: RecentClipCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    thumbnail: { control: 'text', description: '썸네일 이미지 URL' },
    tag: { control: 'text', description: '카드에 표시될 태그' },
    title: { control: 'text', description: '카드 제목' },
    memo: {
      control: 'text',
      description: '카드 메모 내용 (2줄 초과 시 말줄임)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: 'https://picsum.photos/90',
    tag: RECENT_CLIP_CARD_MOCK.tagName,
    title: RECENT_CLIP_CARD_MOCK.title,
    memo: RECENT_CLIP_CARD_MOCK.memo,
  },
};
