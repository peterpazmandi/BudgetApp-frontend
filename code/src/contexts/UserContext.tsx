import React, { createContext, useContext } from "react";
import { UserDto } from "../api";
import { useUserQuery } from "./api/use-user-hooks";

interface UserContext {
  user: UserDto | undefined;
  isFirstUserFetchHappend: boolean;
}

const userContext = createContext<UserContext | null>(null);

export function UserProvider(props: {
  children: React.ReactNode;
}): React.ReactElement {
  
  const { data: user, isFetched: isFirstUserFetchHappend } = useUserQuery();

  return (
    <userContext.Provider value={{ user, isFirstUserFetchHappend }}>
      {props.children}
    </userContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider.");
  }
  return context;
};
