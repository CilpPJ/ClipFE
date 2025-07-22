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

import { DuplicateCheckButton } from '../button';

export const ConfirmUserIdField = () => {
  const form = useFormContext<SignupSchemaType>();

  return (
    <FormField
      control={form.control}
      name='confirmUserId'
      render={({ field }) => (
        <FormItem>
          <FormLabel>아이디</FormLabel>
          <FieldContainer>
            <FieldWrapper>
              <Input {...field} placeholder='아이디를 입력하세요' />
            </FieldWrapper>
            <DuplicateCheckButton
              checkType='userId'
              fieldName='confirmUserId'
            />
          </FieldContainer>
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

const FieldContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;
