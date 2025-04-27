import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService, RegisterRequestDto } from "../../../../api";

const queryKey: QueryKey = ["user"];

export function useRegisterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (registerRequestDto: RegisterRequestDto) => AuthApiService.register(registerRequestDto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
