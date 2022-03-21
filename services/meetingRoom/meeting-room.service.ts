import axios from "axios";
import { ICreateMeeting, IRoom } from "./meeting-room.model";
import * as queryString from "query-string";
import { ListQueryCalendarDTO } from "../calendar/calendar.model";

export async function _createBooking(_createEventInfo: ICreateMeeting) {
  return axios.post("/meeting-events/", { ..._createEventInfo });
}

export async function _getAllBookingEvents(q: ListQueryCalendarDTO) {
  const query = queryString.stringify(q);
  return axios.get(`/meeting-events/?${query}`).then((res) => res.data);
}

export async function _getBookingEventById(id: number) {
  return axios.get(`/meeting-events/${id}`).then((res) => res.data);
}

export async function _getAllRoomsAvb(): Promise<IRoom[]> {
  return axios.get(`/rooms/`).then((res) => res.data);
}

export async function _getAllRooms(_floor): Promise<IRoom[]> {
  return axios.get(`/rooms/${_floor}`).then((res) => res.data);
}

export async function _getAllRoomsById(_id) {
  return axios.get(`/rooms/${_id}`).then((res) => res.data);
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
