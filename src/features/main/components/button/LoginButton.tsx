import { Button, DialogTrigger } from '@/shared';

export const LoginButton = () => {
  return (
    <DialogTrigger asChild>
      <Button variant='outline'>로그인</Button>
    </DialogTrigger>
  );
};
