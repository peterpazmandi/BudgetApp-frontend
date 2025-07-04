import { useIsFetching } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { QueryKeys } from "../common/enums/QueryKeys";

interface LoadingContext {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const initState: LoadingContext = {
  isLoading: false,
  setIsLoading: () => {},
};

const loadingContext = createContext<LoadingContext>(initState);

export const LoadingProvider = (props: Readonly<{ children: ReactNode }>) => {
  const [isLoading, setIsLoading] = useState(false);

  const queryKeys = Object.values(QueryKeys).filter(
    (key) => key !== QueryKeys.USER
  );
  const isFetching = useIsFetching({ queryKey: queryKeys });

  useEffect(() => {
    if (isFetching > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isFetching]);

  return (
    <loadingContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
    </loadingContext.Provider>
  );
};

export const useLoading = () => useContext(loadingContext);
