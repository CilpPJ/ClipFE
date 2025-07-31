import { useFormContext } from 'react-hook-form';

import styled from '@emotion/styled';
import { toast } from 'sonner';

import type { SignupSchemaType } from '@/entities';
import { Button, Spinner } from '@/shared';

import { useDuplicateIdCheck, useDuplicateNicknameCheck } from '../../../hooks';

type Props = {
  checkType: 'userId' | 'nickname';
  fieldName: keyof SignupSchemaType;
};

export const DuplicateCheckButton = ({ checkType, fieldName }: Props) => {
  const { getValues } = useFormContext<SignupSchemaType>();

  const { checkDuplicateId, isPending: isIdPending } = useDuplicateIdCheck();
  const { checkDuplicateNickname, isPending: isNicknamePending } =
    useDuplicateNicknameCheck();

  const isPending = checkType === 'userId' ? isIdPending : isNicknamePending;
  const checkDuplicate =
    checkType === 'userId' ? checkDuplicateId : checkDuplicateNickname;
  const fieldLabel = checkType === 'userId' ? '아이디' : '닉네임';

  const onClickCheck = () => {
    const value = getValues(fieldName);

    if (!value || !String(value).trim()) {
      toast.info(`${fieldLabel}을 입력해주세요.`);
      return;
    }
    checkDuplicate(String(value));
  };

  return (
    <ButtonItem
      type='button'
      variant='secondary'
      onClick={onClickCheck}
      disabled={isPending}
    >
      {isPending ? <Spinner /> : '중복 확인'}
    </ButtonItem>
  );
};

const ButtonItem = styled(Button)`
  min-width: 4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
