import axios from "axios";

export function _getAllDepartments() {
  return axios.get("/department").then((res) => res.data);
}
