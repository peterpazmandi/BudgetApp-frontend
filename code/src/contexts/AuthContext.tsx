// AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthRejected: boolean;
  setIsAuthRejected: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthRejected, setIsAuthRejected] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthRejected, setIsAuthRejected }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
};
