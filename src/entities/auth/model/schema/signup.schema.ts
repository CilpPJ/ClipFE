import { z } from 'zod';

export const signupSchema = z
  .object({
    userId: z.string().min(1, '아이디를 입력해주세요.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
    confirmPassword: z.string().min(1, '비밀번호를 입력해주세요.'),
    nickName: z.string().min(1, '닉네임을 입력해주세요.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;
