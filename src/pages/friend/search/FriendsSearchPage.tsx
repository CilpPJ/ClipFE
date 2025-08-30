import styled from '@emotion/styled';

import { FriendsSearchForm, UserListSection } from '@/features';

export default function FriendsSearchPage() {
  return (
    <FriendsSearchPageLayout>
      <FriendsSearchForm />
      <UserListSection />
    </FriendsSearchPageLayout>
  );
}

const FriendsSearchPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  width: ${({ theme }) => theme.width.full};
  gap: ${({ theme }) => theme.spacing[5]};
`;
