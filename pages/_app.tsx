import "../public/styles/globals.less";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import { API_URL } from "../config";
import {
  checkLastRequestExceedLimit,
  clearToken,
  getAuthToken,
  setLastRequestToken,
} from "../services/auth/auth.service";
import { UserProvider } from "../context/UserContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30_000,
    },
  },
});

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use((config) => {
  if (checkLastRequestExceedLimit()) {
    clearToken();
    window.location.replace("/log-in");
  }

  setLastRequestToken();
  const jwtToken = getAuthToken();
  if (jwtToken !== null) {
    config.headers["Authorization"] = `Bearer ${jwtToken}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status && error.response.status === 401) {
      // clearToken();
      window.location.replace("/log-in");
    }
    return Promise.reject(error);
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (!router.asPath.includes("staff-contact")) {
      sessionStorage.removeItem(`staff-contact-query`);
    }

    if (!router.asPath.includes("birthdays") && !router.asPath.includes("staff-contact")){
      sessionStorage.removeItem(`bd-query`);
    }
  }, [router]);
  return (
    <QueryClientProvider client={queryClient}>
      <title>MindEdge</title>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
