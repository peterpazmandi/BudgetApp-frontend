import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService, LoginRequestDto } from "../../../../api";

const queryKey: QueryKey = ["user"];

export function useLoginMutation(LoginRequestDto: LoginRequestDto) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => AuthApiService.login(LoginRequestDto),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey});
    },
  });
}
