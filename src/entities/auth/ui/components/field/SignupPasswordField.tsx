import { useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';

import type { SignupSchemaType } from '@/entities';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared';

export const SignupPasswordField = () => {
  const form = useFormContext<SignupSchemaType>();
  return (
    <FormField
      control={form.control}
      name='password'
      render={({ field }) => (
        <FormItem>
          <FormLabel>비밀번호</FormLabel>
          <FieldWrapper>
            <Input
              {...field}
              placeholder='비밀번호를 입력하세요'
              type='password'
            />
          </FieldWrapper>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FieldWrapper = styled(FormControl)`
  display: grid;
  gap: 0.75rem;
`;
