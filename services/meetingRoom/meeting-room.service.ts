import axios from 'axios';
import { ICreateMeeting } from './meeting-room.model';

export async function _createBooking(_createEventInfo: ICreateMeeting) {
  return axios.post('/meeting-events/', { ..._createEventInfo });
}

export async function _getAllBookingEvents() {
  return axios.get('/meeting-events/');
}

export async function _getAllRooms() {
  return axios.get('/rooms/');
}

export async function _getRoomByFloor(floor: string) {
  return axios.get(`/rooms/${floor}`);
}
