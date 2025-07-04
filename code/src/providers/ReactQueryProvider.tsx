import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
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
            const message = (error?.body?.detail as string);
            showError(message);
          },
        }),
        mutationCache: new MutationCache({
          onError: (error: any) => {
            const message = (error?.body?.detail as string);
            showError(message);
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
