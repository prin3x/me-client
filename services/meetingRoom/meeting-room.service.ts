import axios from "axios";
import { ICreateMeeting } from "./meeting-room.model";

export async function _createBooking(_createEventInfo: ICreateMeeting) {
  return axios.post("/meeting-events/", { ..._createEventInfo });
}

export async function _getAllBookingEvents() {
  return axios.get("/meeting-events/").then((res) => res.data);
}

export async function _getBookingEventById(id: number) {
  return axios.get(`/meeting-events/${id}`).then((res) => res.data);
}

export async function _getAllRooms() {
  return axios.get("/rooms/").then((res) => res.data);
}

export async function _getRoomByFloor(floor: string) {
  return axios.get(`/rooms/${floor}`).then((res) => res.data);
}

export async function _updateMeetingEvent(
  id,
  _createEventInfo: ICreateMeeting
) {
  return axios.patch(`/meeting-events/${id}`, { ..._createEventInfo });
}

export async function _removeMeetingEvent(id) {
  return axios.delete(`/meeting-events/${id}`);
}
