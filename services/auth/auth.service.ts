import axios from "axios";
import { IContact } from "../contact/contact.model";

/**
 * Set the token to local storage
 * @param _token - The token to be stored in localStorage.
 */
export function setTokenToStorage(_token) {
  localStorage.setItem("token", _token);
}

export function getAuthToken(): string {
  return localStorage.getItem("token");
}

export function setLastRequestToken() {
  localStorage.setItem('iat', new Date().getTime().toString())
}

export function checkLastRequestExceedLimit(): boolean {
  const token = localStorage.getItem('iat');

  if(!token) return false;

  const timeFromToken = parseInt(token, 10);

  if(new Date().getTime() - timeFromToken > 1000 * 60 * 10){
    return true;
  }

  return false;
}

export function clearToken() {
  return localStorage.removeItem("token");
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
