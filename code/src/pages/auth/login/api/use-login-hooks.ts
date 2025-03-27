import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";

const queryKey: QueryKey = ["user"];

export function useLoginMutation(path: string) {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn: () => postData
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey});
    },
  });
}
