import { FriendsSearchForm } from '@/features/search/components/features/FriendsSearchForm';
import { UserList } from '@/widgets/user-list';

export default function FriendsSearchPage() {
  return (
    <>
      <FriendsSearchForm />
      <UserList />
    </>
  );
}
