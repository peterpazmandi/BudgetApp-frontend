import { createContext, ReactNode, useContext, useState } from "react";

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

    return (
        <loadingContext.Provider value={{ isLoading, setIsLoading}}>
            {props.children}
        </loadingContext.Provider>
    )
}

export const useLoading = () => useContext(loadingContext)