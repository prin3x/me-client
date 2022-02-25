import React, { ReactElement, useEffect, useRef, useState } from "react";
// Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"; // a plugin!
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import moment from "moment";
import { _getAllRooms } from "../../services/meetingRoom/meeting-room.service";
import { FULL_CANLENDAR_LICENSE } from "../../config";
import { Badge, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import 'moment/locale/th'  // without this line it didn't work
moment.locale('th')

function MeetingRoomCalendar({
  rooms,
  selectDate,
  meetingEventsQuery,
}): ReactElement {
  const router = useRouter();
  const calendarRef = useRef<any>(null);
  const { data, isLoading, isSuccess } = meetingEventsQuery;
  const [events, setEvents] = useState([]);

  const getToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
    }
  };

  const getToSelectDay = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectDate);
    }
  };


  async function findAllCalendarEvent() {
    if (!data) return;
    const coloredEvents = data?.map((event) => {
      const coloredEvent = { ...event };
      if (event.roomId) {
        console.log(event.start,moment(event.start).format())
        coloredEvent.start = moment(event.start).format();
        coloredEvent.end = moment(event.end).format();
        coloredEvent.resourceIds = [event.roomId];
      }
      return coloredEvent;
    });
    setEvents(coloredEvents);
  }

  const handleEventClick = (clickInfo: any) => {
    let targetEvent;
    const { id, url } = clickInfo.event;
    if (id) {
      targetEvent = events.find((_item: any) => _item.id.toString() === id);
      console.log(targetEvent);
      router.push(`/booking/make?id=${targetEvent.id}`)
    }
  };



  useEffect(() => {
    findAllCalendarEvent();
  }, [data]);

  useEffect(() => {
    getToday();
  }, []);

  useEffect(() => {
    getToSelectDay();
  }, [selectDate]);

  if (isLoading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        schedulerLicenseKey={FULL_CANLENDAR_LICENSE}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrapPlugin,
          resourceTimelinePlugin,
          resourceTimeGridPlugin,
        ]}
        eventClick={handleEventClick}
        headerToolbar={false}
        initialView="resourceTimeGridDay"
        themeSystem="standard"
        resources={[
          {
            id: "5",
            title: "Creative Room",
          },
          {
            id: "6",
            title: "Active Room",
          },
        ]}
        editable
        selectable
        selectMirror
        dayMaxEvents
        slotMaxTime={"21:00:00"}
        slotMinTime={"07:00:00"}
        weekends
        locale={"th"}
        events={isSuccess ? events : []}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
        }}
      />
    </div>
  );
}

// {
//   id: '1',
//   resourceIds: ['a'],
//   title: 'Meeting',
//   start: '2022-01-28',
//   end: '2022-01-29',
// },

export default MeetingRoomCalendar;
