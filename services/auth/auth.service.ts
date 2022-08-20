import axios from "axios";
import { IContact } from "../contact/contact.model";

/**
 * Set the token to local storage
 * @param _token - The token to be stored in localStorage.
 */
export function setTokenToStorage(_token) {
  sessionStorage.setItem("token", _token);
}

export function getAuthToken(): string {
  return sessionStorage.getItem("token");
}

export function clearToken() {
  return sessionStorage.removeItem("token");
}

export async function checkAuth(): Promise<{ accessToken: string }> {
  return await axios.get("/auth/checkauth").then((res) => res.data);
}

export async function checkToken(
  token: string
): Promise<{ accessToken: string }> {
  return await axios
    .post("/auth/checktoken", { token })
    .then((res) => res.data);
}
