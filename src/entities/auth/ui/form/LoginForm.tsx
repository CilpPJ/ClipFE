import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import type { LoginSchemaType } from '@/entities';
import { loginAPI, loginSchema } from '@/entities';
import { Button, Form, ROUTER_PATH } from '@/shared';

import { PasswordField, UserIdField } from '../components';

export const LoginForm = () => {
  const navigate = useNavigate();

  const { mutate: loginMutate } = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      return loginAPI({
        userId: data.userId,
        password: data.password,
      });
    },
    onSuccess: () => {
      toast.success('로그인 성공!');

      navigate(ROUTER_PATH.MAIN);

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
    <Form {...form}>
      <FormBox onSubmit={(e) => e.preventDefault()}>
        <FieldContainer>
          <UserIdField />
          <PasswordField />
        </FieldContainer>
        <ButtonContainer>
          <ButtonItem
            type='submit'
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            로그인
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
