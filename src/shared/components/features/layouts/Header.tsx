import type { HeaderType } from '../../../types';
import { MainHeader, PageHeader } from '../header';

type Props = {
  type: HeaderType;
  title?: string;
};

const HEADER_COMPONENTS = {
  Main: MainHeader,
  Page: PageHeader,
} as const;

export const Header = ({ type, title }: Props) => {
  const HeaderComponent = HEADER_COMPONENTS[type];

  return <HeaderComponent title={title} />;
};
