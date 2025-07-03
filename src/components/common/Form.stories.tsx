import { useForm } from 'react-hook-form';

import { css } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from '@storybook/test';
import { z } from 'zod';

import { Button } from './Button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';
import { Input } from './Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';

const meta: Meta<typeof Form> = {
  title: 'Components/Common/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['submit'],
    },
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const loginSchema = z.object({
  username: z.string().min(2, {
    message: '닉네임은 2자 이상이어야 합니다.',
  }),
});

export const LoginForm: Story = {
  name: 'Form - Login',
  render: () => {
    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        username: '',
      },
    });

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
      console.log(data);
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          css={css`
            display: grid;
            gap: 1rem;
            width: 320px;
          `}
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input placeholder='닉네임을 입력해주세요.' {...field} />
                </FormControl>
                <FormDescription>닉네임은 변경할 수 있습니다.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size='lg' type='submit'>
            제출하기
          </Button>
        </form>
      </Form>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = await canvas.findByRole('button', {
      name: /제출하기/i,
    });
    await userEvent.click(submitButton);

    const errorMessage =
      await canvas.findByText('닉네임은 2자 이상이어야 합니다.');
    // 올바른 메서드 사용: toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument();

    const usernameInput = canvas.getByPlaceholderText('닉네임을 입력해주세요.');
    await userEvent.type(usernameInput, 'JohnDoe');
    await userEvent.click(submitButton);

    expect(
      canvas.queryByText('닉네임은 2자 이상이어야 합니다.'),
    ).not.toBeInTheDocument();
  },
};

// 이메일 필드에 required 에러 메시지를 명시적으로 추가
const profileSchema = z.object({
  email: z
    .string({ required_error: '이메일을 입력해주세요.' })
    .email({ message: '이메일 형식이 올바르지 않습니다.' }),
  language: z.string({ required_error: '언어를 선택해주세요.' }),
});

export const FormWithSelect: Story = {
  name: 'Form - Profile',
  render: () => {
    const form = useForm<z.infer<typeof profileSchema>>({
      resolver: zodResolver(profileSchema),
    });

    const onSubmit = () => {
      alert('수정되었습니다.');
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          css={css`
            display: grid;
            gap: 1rem;
            width: 320px;
          `}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem data-testid='form-item'>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder='google@gmail.com' {...field} />
                </FormControl>
                <FormMessage data-testid='form-message' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='language'
            render={({ field }) => (
              <FormItem data-testid='form-item'>
                <FormLabel>언어</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ''}
                >
                  <FormControl>
                    <SelectTrigger data-testid='select-trigger'>
                      <SelectValue placeholder='언어를 선택해주세요.' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='en'>영어</SelectItem>
                    <SelectItem value='ko'>한국어</SelectItem>
                    <SelectItem value='jp'>일본어</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  언어는 앱에서 사용될 언어입니다.
                </FormDescription>
                <FormMessage data-testid='form-message' />
              </FormItem>
            )}
          />
          <Button size='lg' type='submit'>
            프로필 업데이트
          </Button>
        </form>
      </Form>
    );
  },
};
