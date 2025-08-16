import type { MouseEvent } from 'react';

import styled from '@emotion/styled';
import { Share2 } from 'lucide-react';

type Props = {
  thumbnail: string;
  tag: string;
  title: string;
  memo: string;
  url: string;
};

export const RecentClipCard = ({ thumbnail, tag, title, memo, url }: Props) => {
  const openLink = () => {
    window.open(url, '_blank');
  };

  const shareClip = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    alert('공유 기능 준비 중입니다!');
  };
  return (
    <RecentClipList onClick={openLink}>
      <ThumbnailWrapper>
        <ThumbnailImage src={thumbnail} />
        <ShareButton onClick={shareClip}>
          <Share2 size={15} />
        </ShareButton>
      </ThumbnailWrapper>
      <TagWrapper>
        <RecentClipTag>{tag}</RecentClipTag>
      </TagWrapper>
      <DescriptionWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{memo}</ItemDescription>
      </DescriptionWrapper>
    </RecentClipList>
  );
};

const RecentClipList = styled.div`
  display: flex;
  flex-direction: column;
  width: 174px;
  height: 210px;
  padding: ${({ theme }) => theme.spacing[4]};
  align-items: start;
  gap: ${({ theme }) => theme.spacing[3]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primitive.white};
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;

const ThumbnailWrapper = styled.div`
  width: ${({ theme }) => theme.width.full};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ThumbnailImage = styled.img`
  width: 90px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.primitive.gray[300]};
  border-radius: 10px;

  object-fit: cover;
  display: block;
`;

const ItemTitle = styled.div`
  width: ${({ theme }) => theme.width.full};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primitive.black};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
`;

const TagWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  background-color: ${({ theme }) => theme.colors.primitive.white};
  align-items: center;
  justify-content: center;
`;

const RecentClipTag = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primitive.black};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ItemDescription = styled.div`
  width: ${({ theme }) => theme.width.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  box-orient: vertical;
`;

const ShareButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primitive.gray[100]};
  }
`;
