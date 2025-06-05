import { useIsFetching } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LoadingContext {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const initState: LoadingContext = {
    isLoading: false,
    setIsLoading: () => {},
}

const loadingContext = createContext<LoadingContext>(initState);

export const LoadingProvider = (props: Readonly<{ children: ReactNode}>) => {
    const [isLoading, setIsLoading] = useState(false);
    const isFetching = useIsFetching();

    useEffect(() => {
        if(isFetching > 0) {
            // setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [isFetching]);

    return (
        <loadingContext.Provider value={{ isLoading, setIsLoading}}>
            {props.children}
        </loadingContext.Provider>
    )
}

export const useLoading = () => useContext(loadingContext)