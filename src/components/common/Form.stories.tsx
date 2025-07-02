import { useForm } from 'react-hook-form';

import { css } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from '@storybook/test';
import { z } from 'zod';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../common/Select';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';

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

    const submitButton = canvas.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);

    const errorMessage =
      await canvas.findByText('닉네임은 2자 이상이어야 합니다.');
    await expect(errorMessage).toBeInTheDocument();
    await expect(onsubmit).not.toHaveBeenCalled();

    const usernameInput = canvas.getByPlaceholderText('닉네임을 입력해주세요.');
    await userEvent.type(usernameInput, 'JohnDoe');
    await userEvent.click(submitButton);

    await expect(
      canvas.queryByText('닉네임은 2자 이상이어야 합니다.'),
    ).not.toBeInTheDocument();
    await expect(onsubmit).toHaveBeenCalledWith(
      { username: 'JohnDoe' },
      expect.anything(),
    );
  },
};

const profileSchema = z.object({
  email: z.string().email({ message: '이메일을 입력해주세요.' }),
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
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder='google@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='language'
            render={({ field }) => (
              <FormItem>
                <FormLabel>언어</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
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
                <FormMessage />
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole('button', {
      name: /프로필 업데이트/i,
    });
    await userEvent.click(submitButton);
    await expect(
      await canvas.findByText('이메일을 입력해주세요.'),
    ).toBeInTheDocument();
    await expect(
      await canvas.findByText('언어를 선택해주세요.'),
    ).toBeInTheDocument();
    await expect(onsubmit).not.toHaveBeenCalled();

    await userEvent.type(
      canvas.getByPlaceholderText('google@gmail.com'),
      'test@gmail.com',
    );
    await userEvent.click(canvas.getByRole('combobox'));
    await userEvent.click(
      await canvas.findByRole('option', { name: '한국어' }),
    );

    await userEvent.click(submitButton);

    await expect(
      canvas.queryByText('이메일을 입력해주세요.'),
    ).not.toBeInTheDocument();
    await expect(
      canvas.queryByText('언어를 선택해주세요.'),
    ).not.toBeInTheDocument();
    await expect(onsubmit).toHaveBeenCalledWith(
      { email: 'google@gmail.com', language: 'ko' },
      expect.anything(),
    );
  },
};
