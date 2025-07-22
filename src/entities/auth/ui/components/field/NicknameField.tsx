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

export const NicknameField = () => {
  const form = useFormContext<SignupSchemaType>();

  return (
    <FormField
      control={form.control}
      name='nickName'
      render={({ field }) => (
        <FormItem>
          <FormLabel>닉네임</FormLabel>
          <FieldContainer>
            <FieldWrapper>
              <Input {...field} placeholder='닉네임을 입력하세요' type='text' />
            </FieldWrapper>
            <DuplicateCheckButton checkType='nickName' fieldName='nickName' />
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
