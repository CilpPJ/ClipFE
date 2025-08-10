import { useFormContext } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type DuplicateIdAPIResponse, duplicateIdAPI } from '../apis';
import type { SignupSchemaType } from '../model';

export const useDuplicateIdCheck = () => {
  const { setValue, trigger } = useFormContext<SignupSchemaType>();

  const { mutate: checkDuplicateId, isPending } = useMutation<
    DuplicateIdAPIResponse,
    Error,
    string
  >({
    mutationFn: (userId) => duplicateIdAPI({ userId }),
    onSuccess: (data, variables) => {
      if (data.duplicated) {
        setValue('isUserIdChecked', false);
        toast.warning(`'${variables}'는 이미 사용 중인 아이디입니다.`);
      } else {
        setValue('isUserIdChecked', true);
        toast.success(`'${variables}'는 사용 가능한 아이디입니다!`);
        trigger('userId');
      }
    },
    // TODO: 에러코드에 따라 다른 메시지 출력
    onError: (error) => {
      setValue('isUserIdChecked', false);
      trigger('userId');
      toast.error(error.message || '중복 확인 중 에러가 발생했습니다.');
    },
  });

  return { checkDuplicateId, isPending };
};
