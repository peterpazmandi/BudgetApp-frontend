import { createContext, useContext } from "react";

export interface RegisterContext {
  handleEmailChange: (email: string) => void;
}

const registerContext = createContext<RegisterContext | null>(null);

export function LoginProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const handleEmailChange = (email: string) => {
    console.log(email);
  };

  return (
    <registerContext.Provider value={{ handleEmailChange }}>
      {props.children}
    </registerContext.Provider>
  );
}

export const useRegister = () => {
    const context = useContext(registerContext);
    if(!context) {
        throw new Error("useRegister must be used within a RegisterProvider");
    }
    return context;
};