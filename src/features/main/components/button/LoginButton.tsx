import { Dialog } from 'radix-ui';

import { Button } from '@/shared';

export const LoginButton = () => {
  return (
    <Dialog.Trigger asChild>
      <Button variant='outline'>로그인</Button>
    </Dialog.Trigger>
  );
};
