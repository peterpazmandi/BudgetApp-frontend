import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService, RegisterRequestDto } from "../../../../api";
import { QueryKeys } from "../../../../common/enums/QueryKeys";

const queryKey: QueryKey = [QueryKeys.REGISTER];

export function useRegisterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (registerRequestDto: RegisterRequestDto) => AuthApiService.register(registerRequestDto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
