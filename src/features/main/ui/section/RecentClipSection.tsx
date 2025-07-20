import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';

import { LoadingView } from '@/shared';

import { RecentClipCard } from '../../components';
import { useGetAllClips } from '../../hooks';

export const RecentClipSection = () => {
  const { data: recentClipsData } = useGetAllClips({
    lastCreatedAt: '',
    size: 10,
  });

  if (!recentClipsData) {
    return <LoadingView />;
  }

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
        {recentClipsData.content.map((data, index) => (
          <RecentClipCard
            key={index}
            thumbnail={data.thumbnail}
            tag={data.tagName}
            title={data.title}
            memo={data.memo}
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
