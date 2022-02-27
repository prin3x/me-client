import axios from "axios";
import { IUserChangePassword, UserInfo } from "./user.model";

export function _login(userInfo: UserInfo) {
  return axios
    .post("/auth/user/login", { ...userInfo })
    .then((res) => res.data);
}

export function _changePassword(userInfo: IUserChangePassword) {
  return axios
    .post("/auth/change-password", { ...userInfo })
    .then((res) => res.data);
}
