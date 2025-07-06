import { Button, DialogTrigger } from '@/shared';

export const SignupButton = () => {
  return (
    <DialogTrigger asChild>
      <Button variant='outline'>회원가입</Button>
    </DialogTrigger>
  );
};
