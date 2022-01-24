import axios from 'axios';

export function _getAllNewsCategories() {
  return axios.get('/post-categories/').then((res) => res.data);
}

export function _getRecentNews() {
  return axios.get('/posts').then((res) => res.data);
}

export function _getOnePost(_slug: string) {
  return axios.get(`/posts/${_slug}`).then((res) => res.data);
}

export function _getPostByCategoryId(_id: string | number) {
  return axios.get(`posts/category/${_id}`).then((res) => res.data);
}
