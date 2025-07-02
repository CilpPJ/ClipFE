import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skeleton } from '../../common/Skeleton';

import { LoadingView } from './LoadingView';

const meta: Meta<typeof LoadingView> = {
  title: 'Components/Features/View/LoadingView',
  component: LoadingView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['spinner', 'skeleton'],
      description: '로딩 UI 타입 선택 ',
      defaultValue: 'spinner',
    },
  },
  render: (args) => {
    if (args.type === 'skeleton') {
      return (
        <SkeletonContainer>
          <Skeleton width={48} height={48} variant='circle' />
          <SkeletonWrapper>
            <Skeleton width={250} height={16} />
            <Skeleton width={200} height={16} />
          </SkeletonWrapper>
        </SkeletonContainer>
      );
    }
    return <LoadingView />;
  },
};

export const SpinnerOnly: Story = {
  name: 'Spinner',
  render: () => <LoadingView />,
};

export const SkeletonOnly: Story = {
  name: 'Skeleton',
  render: () => (
    <SkeletonContainer>
      <Skeleton width={48} height={48} variant='circle' />
      <SkeletonWrapper>
        <Skeleton width={250} height={16} />
        <Skeleton width={200} height={16} />
      </SkeletonWrapper>
    </SkeletonContainer>
  ),
};

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
