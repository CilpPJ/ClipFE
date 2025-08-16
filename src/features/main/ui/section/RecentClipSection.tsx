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
        <RecentClipHeaderText>
          <b>클리퍼</b>님이 최근 저장한 클립
        </RecentClipHeaderText>
        <ChevronRight />
      </RecentClipHeader>

      {hasContent ? (
        <RecentClipCardContainer>
          {recentClipsData.content.map((data) => (
            <RecentClipCard
              key={data.tagId}
              thumbnail={data.url}
              tag={data.tagName}
              title={data.title}
              memo={data.memo}
              url={data.url}
            />
          ))}
        </RecentClipCardContainer>
      ) : (
        <EmptyView>최근 저장한 클립이 없어요. 🧐</EmptyView>
      )}
    </RecentClipBox>
  );
};

const RecentClipBox = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.width.full};
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const RecentClipHeader = styled.div`
  display: flex;
  width: ${({ theme }) => theme.width.full};
  align-items: center;
  justify-content: space-between;
`;

const RecentClipHeaderText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const RecentClipCardContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 174px;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[2]};
  overflow-x: auto;
  align-items: start;
  justify-content: start;
  width: ${({ theme }) => theme.width.full};
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyView = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.full};
  min-height: 150px;
  color: ${({ theme }) => theme.colors.primitive.gray[500]};
`;
