import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";
import { UserType } from "../../types/api/UserType";
type LoginUserType = UserType & {isAdmin: boolean};

export type LoginUserContextType = {
  loginUser: LoginUserType | null;
  setLoginUser: Dispatch<SetStateAction<LoginUserType | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: {children: ReactNode}) => {
  
  const [loginUser, setLoginUser] = useState<LoginUserType | null>(null)
  return (
    <LoginUserContext.Provider value={{loginUser, setLoginUser}}>
      {props.children}
    </LoginUserContext.Provider>
  )
}