import { QueryKey, useQuery } from "@tanstack/react-query"
import { UserApiService } from "../../api";

const queryKey: QueryKey = ["user"];

export function useUserQuery() {
    return useQuery({
        queryKey: queryKey,
        queryFn: () => UserApiService.getUserInfo()
    })
}