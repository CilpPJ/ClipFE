import { MainHeader, PageHeader } from '../header';

type Props = {
  pageType: 'Main' | 'Page';
  title?: string;
};

export const Header = ({ pageType = 'Page', title }: Props) => {
  return pageType === 'Main' ? <MainHeader /> : <PageHeader title={title} />;
};
