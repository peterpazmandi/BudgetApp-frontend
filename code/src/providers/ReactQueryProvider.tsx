import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { useNotification } from "../common/hooks/useNotification";
import { QueryKeys } from "../common/enums/QueryKeys";
import { useNavigate } from "react-router-dom";
import { LANDING_PAGE_ROUTE } from "../router/Routes";

export default function ReactQueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { showError } = useNotification();
  const navigate = useNavigate();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error: any) => {
            const message = error?.body?.detail as string;
            showError(message);
            if (error?.body?.status === 401) {
              queryClient.removeQueries({ queryKey: [QueryKeys.USER] });
              navigate(LANDING_PAGE_ROUTE);
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => {
            const message = error?.body?.detail as string;
            showError(message);
            if (error?.body?.status === 401) {
              queryClient.removeQueries({ queryKey: [QueryKeys.USER] });
              navigate(LANDING_PAGE_ROUTE);
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
