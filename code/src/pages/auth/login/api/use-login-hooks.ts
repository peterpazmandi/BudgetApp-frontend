import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService, LoginRequestDto } from "../../../../api";
import { QueryKeys } from "../../../../common/enums/QueryKeys";
import { useAuthContext } from "../../../../contexts/AuthContext";

const queryKey: QueryKey = [QueryKeys.USER];

export function useLoginMutation() {
  const queryClient = useQueryClient();
  const { setIsAuthRejected } = useAuthContext();

  return useMutation({
    mutationFn: (loginRequestDto: LoginRequestDto) =>
      AuthApiService.login(loginRequestDto),
    onSuccess: () => {
      setIsAuthRejected(false);
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
