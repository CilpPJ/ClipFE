import { z } from 'zod';

export const signupSchema = z
  .object({
    confirmUserId: z.string().min(1, '아이디를 입력해주세요.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
    confirmPassword: z.string().min(1, '비밀번호를 입력해주세요.'),
    nickName: z.string().min(1, '닉네임을 입력해주세요.'),
    isUserIdChecked: z.boolean(),
    isNicknameChecked: z.boolean(),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })
  .refine((data) => data.isUserIdChecked, {
    message: '아이디 중복확인을 해주세요.',
    path: ['confirmUserId'],
  })
  .refine((data) => data.isNicknameChecked, {
    message: '닉네임 중복확인을 해주세요.',
    path: ['nickName'],
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;
