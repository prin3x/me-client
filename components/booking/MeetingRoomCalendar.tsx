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
import { Badge, Col, Row, Spin } from "antd";
import {
  LeftOutlined,
  LoadingOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

// import "moment/locale/th"; // without this line it didn't work
// moment.locale("th");

const colorsMap = [
  { color: "primary", type: "internal" },
  { color: "secondary", type: "external" },
];

const themeValues = {
  primary: "#5B97F5",
  secondary: "#F7AB50",
};

function MeetingRoomCalendar({
  rooms,
  selectDate,
  meetingEventsQuery,
  setSelectDate,
  setBookingInterval,
}): ReactElement {
  const router = useRouter();
  const calendarRef = useRef<any>(null);
  const { data, isLoading, isSuccess } = meetingEventsQuery;
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    calendarRef?.current?.getApi().getDate() || moment()
  );

  const onNextButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();

    setCurrentDate(moment(calendarRef?.current?.getApi().getDate()));
    setSelectDate(
      moment(calendarRef?.current?.getApi().getDate()).format("YYYY-MM-DD")
    );
  };

  const onPrevButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();

    setCurrentDate(moment(calendarRef?.current?.getApi().getDate()));
    setSelectDate(
      moment(calendarRef?.current?.getApi().getDate()).format("YYYY-MM-DD")
    );
  };

  useEffect(() => {
    const setNewMettingInterval = {
      startDate: currentDate.startOf("month").format("YYYY-MM-DD"),
      endDate: currentDate.endOf("month").format("YYYY-MM-DD"),
    };
    setBookingInterval(setNewMettingInterval);
  }, [currentDate]);

  const getToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
    }
  };

  const getToSelectDay = (selectDate) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectDate);
    }
  };

  async function findAllCalendarEvent() {
    if (!data) return;
    const coloredEvents = data?.map((event) => {
      const coloredEvent = { ...event };
      if (event.roomId) {
        coloredEvent.start = event.start;
        coloredEvent.end = event.end;
        coloredEvent.resourceIds = [event.roomId];
        coloredEvent.title = `<div style="font-weight: bold;text-align: center; font-size: 20px">${event.title}</div> <div style="text-align: center;">By ${event.staffContactDetail.nameTH} ${event.staffContactDetail.position}</div>`;
      }
      if (event.type) {
        const foundColor = colorsMap.find(
          (x) => (x as any).type === event.type
        );
        if (foundColor) {
          coloredEvent.color = (themeValues as any)[foundColor.color];
        }
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
      router.push(`/booking/make?id=${targetEvent.id}`);
    }
  };

  useEffect(() => {
    findAllCalendarEvent();
  }, [data]);

  useEffect(() => {
    getToday();
  }, []);

  useEffect(() => {
    getToSelectDay(selectDate);
  }, [selectDate]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = (window as any).document.querySelectorAll(
      ".fc-col-header-cell-cushion"
    );

    for (let i of els) {
      i.innerHTML = i.firstChild.nodeValue;
    }
  }, [window]);

  if (isLoading && !window)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

  return (
    <div>
      <Row justify="space-between" className="my-10">
        <Col>
          <div
            onClick={onPrevButtonClick}
            className="cursor-pointer flex items-center text-slate-600 gap-5 text-sm"
          >
            <LeftOutlined style={{ fontSize: 24 }} />
            Previous Day
          </div>
        </Col>
        <Col>
          <div className="text-xl font-bold">
            {moment(selectDate).format("dddd DD MMMM yyyy")}
          </div>
        </Col>
        <Col>
          <div
            onClick={onNextButtonClick}
            className="cursor-pointer flex items-center text-slate-400 gap-5 text-sm"
          >
            Next Day
            <RightOutlined style={{ fontSize: 24 }} />
          </div>
        </Col>
      </Row>
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
        resources={(_, successCallback, __) =>
          successCallback(
            rooms.map((_room) => {
              return {
                id: _room.id,
                title: `${_room.name} (${_room.capacity} คน)`,
              };
            })
          )
        }
        editable
        selectable
        selectMirror
        dayMaxEvents
        resourceAreaWidth={10}
        slotMaxTime={"19:00:01"}
        slotMinTime={"07:00:00"}
        weekends
        allDaySlot={false}
        locale={"en"}
        events={isSuccess ? events : []}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        slotLabelInterval={{ minutes: 30 }}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        eventContent={({ event }: any) => {
          return { html: event.title };
        }}
      />
      <Row className="mt-3">
        <div
          className="rounded-2xl text-center p-2 font-bold w-24 h-8 leading-4"
          style={{ backgroundColor: "#5B97F5" }}
        >
          Internal
        </div>
        <div
          className="rounded-2xl text-center p-2 font-bold w-24 h-8 leading-4 ml-3"
          style={{ backgroundColor: "#F7AB50" }}
        >
          External
        </div>
      </Row>
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
