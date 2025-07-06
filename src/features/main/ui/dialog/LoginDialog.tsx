import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { LoginSchemaType } from '@/entities';
import { loginSchema } from '@/entities';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  authStorage,
} from '@/shared';

import { loginAPI } from '../../apis';
import { LoginButton, PasswordField, UserIdField } from '../../components';

export const LoginDialog = () => {
  const { mutate: loginMutate } = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      return loginAPI({
        userId: data.userId,
        password: data.password,
      });
    },
    onSuccess: (response) => {
      authStorage.accessToken.set(response.accessToken);
      authStorage.refreshToken.set(response.refreshToken);

      toast.success('로그인 성공!');

      form.reset();
    },
    onError: (error) => {
      console.log(error);
      toast.error('로그인 실패..');
      console.log('로그인 실패..');
    },
  });

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    loginMutate(data);
  };

  return (
    <Dialog>
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <LoginButton />
          <DialogContentContainer>
            <DialogHeader>
              <DialogTitle>로그인</DialogTitle>
            </DialogHeader>
            <FieldContainer>
              <UserIdField />
              <PasswordField />
            </FieldContainer>
            <DialogFooter>
              <ButtonContainer>
                <Button
                  type='submit'
                  disabled={!form.formState.isValid}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  로그인
                </Button>
                <DialogClose asChild>
                  <Button variant='outline'>취소</Button>
                </DialogClose>
              </ButtonContainer>
            </DialogFooter>
          </DialogContentContainer>
        </form>
      </Form>
    </Dialog>
  );
};
const DialogContentContainer = styled(DialogContent)`
  @media (min-width: 640px) {
    max-width: 425px;
  }
`;

const FieldContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
`;
