import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button, Form, ROUTER_PATH, Spinner } from '@/shared';

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
      nickname: '',
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
        nickname: data.nickname,
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
          <PasswordFieldWrapper>
            <SignupPasswordField />
            <SignupConfirmPasswordField />
          </PasswordFieldWrapper>
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
        <TextBox>
          <Text>이미 가입했다면?</Text>
          <NavigateText to={ROUTER_PATH.LOGIN}>로그인</NavigateText>
        </TextBox>
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

const TextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Text = styled.span`
  font-size: 0.8rem;
`;

const NavigateText = styled(Link)`
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

const PasswordFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
