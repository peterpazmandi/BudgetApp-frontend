import { QueryKey, useQuery } from "@tanstack/react-query";
import { UserApiService } from "../../api";
import { QueryKeys } from "../../common/enums/QueryKeys";
import { useAuthContext } from "../AuthContext";

const queryKey: QueryKey = [QueryKeys.USER];
const STALE_TIME = 1000 * 10; // 5 minutes

export function useUserQuery() {
  const { isAuthRejected } = useAuthContext();
    return useQuery({
        queryKey: queryKey,
        queryFn: () => UserApiService.getUserInfo(),
        staleTime: STALE_TIME,
        enabled: !isAuthRejected,
        refetchOnWindowFocus: !isAuthRejected,
    })
}