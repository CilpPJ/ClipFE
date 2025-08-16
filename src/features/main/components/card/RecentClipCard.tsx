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

const RecentClipList = styled.li`
  display: flex;
  flex-direction: column;
  width: 174px;
  height: 210px;
  padding: 1rem;
  align-items: start;
  gap: 0.8rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ThumbnailImage = styled.img`
  width: 90px;
  height: 90px;
  background-color: #b7b7b7;
  border-radius: 10px;

  object-fit: cover;
  display: block;
`;

const ItemTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #000;
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
  border: 1px solid var(--secondary);
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const RecentClipTag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #000;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemDescription = styled.div`
  width: 100%;
  font-size: 12px;
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
  padding: 4px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
