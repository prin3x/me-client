import axios from "axios";
import { ListQueryParams, ListQueryParamsBirthday } from "./contact.model";
import * as queryString from "query-string";

export function _getAllStaffContacts(query: ListQueryParams) {
  const stringQuery = queryString.stringify(query);
  return axios.get(`/staff-contacts?${stringQuery}`).then((res) => res.data);
}

export function _getAllStaffContactBirthdays(query: ListQueryParamsBirthday) {
  const stringQuery = queryString.stringify(query);
  return axios.get(`/staff-contacts/birthday?${stringQuery}`).then((res) => res.data);
}


export function _getOneStaff(_id: number | string) {
  return axios.get(`/staff-contacts/${_id}`).then((res) => res.data);
}
