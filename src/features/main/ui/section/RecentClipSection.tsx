import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';

import { RECENT_CLIP_CARD_MOCK } from '@/entities';

import { RecentClipCard } from '../../components';

export const RecentClipSection = () => {
  return (
    <RecentClipBox>
      <RecentClipHeader>
        <span
          css={css`
            font-size: 18px;
          `}
        >
          <b>클리퍼</b>님이 최근 저장한 클립
        </span>
        <ChevronRight />
      </RecentClipHeader>
      <RecentClipCardContainer>
        {Array.from({ length: 10 }).map((_, index) => (
          <RecentClipCard
            key={index}
            thumbnail={RECENT_CLIP_CARD_MOCK.thumbnail}
            tag={RECENT_CLIP_CARD_MOCK.tagName}
            title={RECENT_CLIP_CARD_MOCK.title}
            memo={RECENT_CLIP_CARD_MOCK.memo}
          />
        ))}
      </RecentClipCardContainer>
    </RecentClipBox>
  );
};

const RecentClipBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

const RecentClipHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const RecentClipCardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 174px;
  gap: 1rem;
  padding: 1rem 10px;
  overflow-x: auto;
  align-items: start;
  justify-content: start;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
