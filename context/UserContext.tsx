import { createContext, useEffect, useState } from "react";
import { checkAuth, clearToken } from "../services/auth/auth.service";
import { IContact } from "../services/contact/contact.model";

interface UserState {
  userInfo: IContact;
  signOut: () => void;
  getUser: () => void;
}

export const UserContext = createContext({} as UserState);

export function UserProvider(props: any) {
  const [userInfo, setUserInfo] = useState<IContact | null>(null);

  const getUser = async () => {
    const user = await checkAuth();
    if (!user) return;
    setUserInfo(user);
  };

  const signOut = async () => {
    setUserInfo(null);
    clearToken();
  };

  return (
    <UserContext.Provider value={{ userInfo, signOut, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
