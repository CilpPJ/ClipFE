import { useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';

import type { SignupSchemaType } from '@/entities';
import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

export const SignupConfirmPasswordField = () => {
  const form = useFormContext<SignupSchemaType>();
  return (
    <FormField
      control={form.control}
      name='confirmPassword'
      render={({ field }) => (
        <FormItem>
          <FieldWrapper>
            <Input
              {...field}
              placeholder='비밀번호를 다시 입력하세요'
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
