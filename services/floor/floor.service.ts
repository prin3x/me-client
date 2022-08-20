import axios from "axios";

export function _getAllFloors() {
  return axios.get("/floor").then((res) => res.data);
}
