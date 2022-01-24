import axios from 'axios';

export function _getAllStaffContacts() {
  return axios.get('/staff-contacts/').then((res) => res.data);
}

export function _getOneStaff(_id: number | string) {
  return axios.get(`/staff-contacts/${_id}`).then((res) => res.data);
}
