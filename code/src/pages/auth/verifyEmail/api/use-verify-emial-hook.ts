import { QueryKey, useQuery } from "@tanstack/react-query";
import { AuthApiService } from "../../../../api";
import { QueryKeys } from "../../../../common/enums/QueryKeys";

const queryKey: QueryKey = [QueryKeys.USER];

export function useVerifyEmailQuery(token: string) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => AuthApiService.verifyEmail(token),
  });
}
