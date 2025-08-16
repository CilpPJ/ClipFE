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

export const NicknameField = () => {
  const form = useFormContext<SignupSchemaType>();
  return (
    <FormField
      control={form.control}
      name='nickname'
      render={({ field }) => (
        <FormItem>
          <FormLabel>닉네임</FormLabel>
          <FieldWrapper>
            <Input {...field} placeholder='닉네임을 입력하세요' type='text' />
          </FieldWrapper>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const FieldWrapper = styled(FormControl)`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;
