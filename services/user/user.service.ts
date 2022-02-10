import axios from "axios";
import { UserInfo } from "./user.model";

export function _login(userInfo: UserInfo) {
  return axios
    .post("/auth/user/login", { ...userInfo })
    .then((res) => res.data);
}
