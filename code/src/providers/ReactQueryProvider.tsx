import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { QueryKeys } from "../common/enums/QueryKeys";
import { useNotification } from "../common/hooks/useNotification";

export default function ReactQueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { showError } = useNotification();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error: any) => {
            const message = error?.body?.detail as string;
            showError(message);
            if (error?.body?.status === 401) {
              queryClient.removeQueries({ queryKey: [QueryKeys.USER] });
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => {
            const message = error?.body?.detail as string;
            showError(message);
            if (error?.body?.status === 401) {
              queryClient.removeQueries({ queryKey: [QueryKeys.USER] });
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
