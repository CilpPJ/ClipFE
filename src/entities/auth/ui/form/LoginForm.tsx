import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type LoginSchemaType, loginAPI, loginSchema } from '@/entities';
import {
  type ApiResponse,
  Button,
  Form,
  ROUTER_PATH,
  type User,
  useAuthStore,
} from '@/shared';

import { PasswordField, UserIdField } from '../components';

export const LoginForm = () => {
  const { setNickname } = useAuthStore();

  const navigate = useNavigate();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const onSuccess = (data: ApiResponse<User>) => {
    if (data.status === 'SUCCESS') {
      toast.success('로그인 성공!');

      setNickname(data.data.nickname);

      navigate(ROUTER_PATH.MAIN);
      form.reset();
    }
  };

  const { mutate: loginMutate } = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      return loginAPI({
        userId: data.userId,
        password: data.password,
      });
    },
    onSuccess,
    onError: (error) => {
      console.log(error);
      toast.error('로그인 실패..');
      console.log('로그인 실패..');
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
            variant='secondary'
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            로그인
          </ButtonItem>
        </ButtonContainer>
        <TextBox>
          <Text>아직 회원이 아니신가요?</Text>
          <NavigateText to={ROUTER_PATH.SIGN_UP}>회원가입</NavigateText>
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
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 20rem;
`;

const ButtonItem = styled(Button)`
  width: 100%;
  color: #fff;
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
