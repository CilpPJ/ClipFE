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

  const hasContent = (recentClipsData?.content?.length ?? 0) > 0;

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

      {hasContent ? (
        <RecentClipCardContainer>
          {recentClipsData.content.map((data) => (
            <RecentClipCard
              key={data.tagId}
              thumbnail={data.tagName}
              tag={data.url}
              title={data.title}
              memo={data.memo}
            />
          ))}
        </RecentClipCardContainer>
      ) : (
        <EmptyView>
          <span>최근 저장한 클립이 없어요. 🧐</span>
        </EmptyView>
      )}
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

const EmptyView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 150px;
  border-radius: 8px;
  background-color: #f7f7f7;
  color: #888;
`;
