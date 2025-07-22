import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { type DuplicateIdAPIResponse, duplicateNicknameAPI } from '../apis';

export const useDuplicateNicknameCheck = () => {
  const { mutate: checkDuplicateNickname, isPending } = useMutation<
    DuplicateIdAPIResponse,
    Error,
    string
  >({
    mutationFn: (nickName) => duplicateNicknameAPI({ nickName }),
    onSuccess: (data, variables) => {
      if (data.duplicated) {
        toast.warning(`'${variables}'는 이미 사용 중인 닉네임입니다.`);
      } else {
        toast.success(`'${variables}'는 사용 가능한 닉네임입니다!`);
      }
    },
    onError: (error) => {
      toast.error(error.message || '중복 확인 중 에러가 발생했습니다.');
    },
  });

  return { checkDuplicateNickname, isPending };
};
