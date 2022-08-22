import { createContext, useEffect, useState } from "react";
import {
  checkAuth,
  checkToken,
  clearToken,
  setTokenToStorage,
} from "../services/auth/auth.service";
import { IContact } from "../services/contact/contact.model";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { message } from "antd";

interface UserState {
  userInfo: IContact;
  signOut: () => void;
  getUser: () => void;
}

export const UserContext = createContext({} as UserState);

export function UserProvider(props: any) {
  const [userInfo, setUserInfo] = useState<IContact | null>(null);
  const router = useRouter();
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);

  const getUser = async () => {
    // const user = await checkAuth();
    if (sessionStorage.getItem("token")) {
      const user: IContact = jwt_decode(sessionStorage.getItem("token"));
      if (!user) return false;
      if (user.role) signOut();
      setUserInfo(user);
    }
  };
  const signOut = async () => {
    setUserInfo(null);
    clearToken();
  };

  const checkTokenAndRenew = async () => {
    try {
      const {accessToken} = await checkToken(sessionStorage.getItem("token"));

      if (accessToken) {
        setTokenToStorage(accessToken);
      }
    } catch (error) {
      message.error("Inactive for too long");
    }
  };

  useEffect(() => {
    if (!router.pathname.includes("log-in")) {
      getUser();
    }

    // if(!router.pathname.includes("log-in") && localStorage.getItem("token")){
    //   checkTokenAndRenew();
    // }
  }, [router]);

  return (
    <UserContext.Provider value={{ userInfo, signOut, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
