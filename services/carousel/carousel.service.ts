import axios from "axios";

export function _getAllEnabledCarousel() {
    return axios.get(`/carousel`).then((res) => res.data);
  }
  