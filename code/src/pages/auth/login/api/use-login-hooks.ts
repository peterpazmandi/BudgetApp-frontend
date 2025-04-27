import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService, LoginRequestDto } from "../../../../api";

const queryKey: QueryKey = ["user"];

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
