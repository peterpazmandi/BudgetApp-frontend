import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService, LoginRequestDto } from "../../../../api";
import { QueryKeys } from "../../../../common/enums/QueryKeys";

const queryKey: QueryKey = [QueryKeys.USER];

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (loginRequestDto: LoginRequestDto) =>
      AuthApiService.login(loginRequestDto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
