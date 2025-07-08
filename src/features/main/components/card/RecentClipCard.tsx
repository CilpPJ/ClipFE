import styled from '@emotion/styled';
import { Share2 } from 'lucide-react';

type Props = {
  thumbnail: string;
  tag: string;
  title: string;
  memo: string;
};

export const RecentClipCard = ({ thumbnail, tag, title, memo }: Props) => {
  return (
    <RecentClipList>
      <ThumbnailWrapper>
        <ThumbnailImage src={thumbnail} />
        <Share2 size={15} />
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

const RecentClipList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 174px;
  height: 230px;
  padding: 1rem;
  align-items: start;
  gap: 0.8rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;

const ThumbnailWrapper = styled.li`
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
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #000;
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
  height: 100%;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
`;
