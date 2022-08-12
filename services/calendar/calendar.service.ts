import axios from "axios";
import {
  ListQueryCalendarDTO,
  MakeNewsDto,
  UpdateNewsDto,
} from "./calendar.model";
import * as queryString from "query-string";
import moment from "moment";

export async function _findAllCalendarEvent(
  q: ListQueryCalendarDTO
): Promise<any> {
  const query = queryString.stringify(q);
  return await axios.get(`/calendar-event?${query}`).then((res) => res.data);
}
export function _getAllCategories(q: ListQueryCalendarDTO) {
  return axios.get(`/calendar-event-category`).then((res) => res.data);
}

export function _makeNewEvent(_eventInfo: MakeNewsDto) {
  return axios
    .post("/calendar-event", { ..._eventInfo })
    .then((res) => res.data);
}

export function _updateEvent(id: number | string, eventInfo: UpdateNewsDto) {
  return axios
    .patch(`/calendar-event/${id}`, { ...eventInfo })
    .then((res) => res.data);
}

export function _deleteEvent(id: number | string) {
  return axios.delete(`/calendar-event/${id}`).then((res) => res.data);
}

export function _getHolidays() {
  return axios
    .get(`/calendar-event/list?category=holiday&year=${moment().year()}&limit=100`)
    .then((res) => res.data);
}
