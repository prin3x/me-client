import axios from "axios";
import { ListQueryParamsForPost } from "./news.model";
import * as queryString from "query-string";

export function _getAllNewsCategories() {
  return axios.get("/post-categories/").then((res) => res.data);
}

export function _getRecentNews(q: ListQueryParamsForPost) {
  const stringQuery = queryString.stringify(q);
  return axios.get(`/posts?${stringQuery}`).then((res) => res.data);
}

export function _getOnePost(_slug: string) {
  return axios.get(`/posts/${_slug}`).then((res) => res.data);
}

export function _getPostByCategoryId(_id: string | number) {
  return axios.get(`posts/category/${_id}`).then((res) => res.data);
}
