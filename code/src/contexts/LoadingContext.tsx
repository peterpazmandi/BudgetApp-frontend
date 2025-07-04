import { useIsFetching } from "@tanstack/react-query";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const shouldntShowLoadingSpinner =
    location.pathname !== "/" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register";
  const [isLoading, setIsLoading] = useState(false);

  const isFetching = useIsFetching();

  useEffect(() => {
    if (isFetching > 0 && shouldntShowLoadingSpinner) {
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
