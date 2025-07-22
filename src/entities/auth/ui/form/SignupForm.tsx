import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button, Form, Spinner } from '@/shared';

import { signupAPI } from '../../apis';
import { type SignupSchemaType, signupSchema } from '../../model';
import {
  ConfirmUserIdField,
  NicknameField,
  SignupConfirmPasswordField,
  SignupPasswordField,
} from '../components';

export const SignupForm = () => {
  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      confirmUserId: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      isUserIdChecked: false,
      isNicknameChecked: false,
    },
    mode: 'onChange',
  });

  const { mutate: signupMutate, isPending } = useMutation({
    mutationFn: (data: SignupSchemaType) => {
      return signupAPI({
        confirmUserId: data.confirmUserId,
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

  const onSubmit = (data: SignupSchemaType) => {
    signupMutate(data);
  };

  return (
    <Form {...form}>
      <FormBox onSubmit={(e) => e.preventDefault()}>
        <FieldContainer>
          <ConfirmUserIdField />
          <SignupPasswordField />
          <SignupConfirmPasswordField />
          <NicknameField />
        </FieldContainer>
        <ButtonContainer>
          <ButtonItem
            type='submit'
            variant='secondary'
            onClick={form.handleSubmit(onSubmit)}
            disabled={!form.formState.isValid || isPending}
          >
            {isPending ? <Spinner /> : '회원가입'}
          </ButtonItem>
        </ButtonContainer>
      </FormBox>
    </Form>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1rem;
`;

const FieldContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 20rem;
`;

const ButtonItem = styled(Button)`
  width: 100%;
`;
