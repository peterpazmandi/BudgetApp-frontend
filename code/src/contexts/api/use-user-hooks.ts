import { QueryKey, useQuery } from "@tanstack/react-query";
import { UserApiService } from "../../api";
import { QueryKeys } from "../../common/enums/QueryKeys";

const queryKey: QueryKey = [QueryKeys.USER];

export function useUserQuery() {
    return useQuery({
        queryKey: queryKey,
        queryFn: () => UserApiService.getUserInfo()
    })
}