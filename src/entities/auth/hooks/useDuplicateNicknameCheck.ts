import { useFormContext } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  type DuplicateNicknameAPIResponse,
  duplicateNicknameAPI,
} from '../apis';
import type { SignupSchemaType } from '../model';

export const useDuplicateNicknameCheck = () => {
  const { setValue, trigger } = useFormContext<SignupSchemaType>();

  const { mutate: checkDuplicateNickname, isPending } = useMutation<
    DuplicateNicknameAPIResponse,
    Error,
    string
  >({
    mutationFn: (nickname) => duplicateNicknameAPI({ nickname }),
    onSuccess: (data, variables) => {
      if (data.duplicated) {
        setValue('isNicknameChecked', false);
        toast.warning(`'${variables}'는 이미 사용 중인 닉네임입니다.`);
      } else {
        setValue('isNicknameChecked', true);
        toast.success(`'${variables}'는 사용 가능한 닉네임입니다!`);
        trigger('nickname');
      }
    },
    // TODO: 에러코드에 따라 다른 메시지 출력
    onError: (error) => {
      setValue('isNicknameChecked', false);
      trigger('nickname');
      toast.error(error.message || '중복 확인 중 에러가 발생했습니다.');
    },
  });

  return { checkDuplicateNickname, isPending };
};
