import { useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';

import type { LoginSchemaType } from '@/entities';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared';

export const UserIdField = () => {
  const form = useFormContext<LoginSchemaType>();
  return (
    <FormField
      control={form.control}
      name='userId'
      render={({ field }) => (
        <FormItem>
          <FormLabel>아이디</FormLabel>
          <FieldWrapper>
            <Input
              {...field}
              placeholder='아이디를 입력하세요'
              value={field.value}
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
