import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { SignupSchemaType } from '@/entities';
import { signupSchema } from '@/entities';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
} from '@/shared';

import { signupAPI } from '../../apis';
import {
  NicknameField,
  SignupButton,
  SignupConfirmPasswordField,
  SignupPasswordField,
  UserIdField,
} from '../../components';

export const SignupDialog = () => {
  const { mutate: signupMutate } = useMutation({
    mutationFn: async (data: SignupSchemaType) => {
      return signupAPI({
        userId: data.userId,
        password: data.password,
        nickName: data.nickName,
      });
    },
    onSuccess: () => {
      toast.success('회원가입 성공!');

      form.reset();
    },
    onError: () => {
      toast.error('회원가입 실패..');
    },
  });

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userId: '',
      password: '',
      confirmPassword: '',
      nickName: '',
    },
  });

  const onSubmit = (data: SignupSchemaType) => {
    signupMutate(data);
  };

  return (
    <Dialog>
      <Form {...form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <SignupButton />
          <DialogContentContainer>
            <DialogHeader>
              <DialogTitle>회원가입</DialogTitle>
            </DialogHeader>
            <FieldContainer>
              <UserIdField />
              <SignupPasswordField />
              <SignupConfirmPasswordField />
              <NicknameField />
            </FieldContainer>
            <DialogFooter>
              <ButtonContainer>
                <Button
                  type='submit'
                  disabled={!form.formState.isValid}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  회원가입
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
