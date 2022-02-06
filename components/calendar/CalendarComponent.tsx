import { Checkbox, Col, Form, Row, Select } from "antd";
import dynamic from "next/dynamic";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import HeroSection from "../../components/calendar/HeroSection";
import LayoutHOC from "../../layout/LayoutHOC";
import { CALENDAR_EVENT } from "../../services/calendar/calendar.queryKey";
import { _findAllCalendarEvent } from "../../services/calendar/calendar.service";
import { useQuery } from "react-query";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { FULL_CANLENDAR_LICENSE } from "../../config";
import { ListQueryCalendarDTO } from "../../services/calendar/calendar.model";
import EventModal from "./EventModal";

const colorsMap = [
  { color: "primary", category: "event", categoryId: 2 },
  { color: "secondary", category: "other", categoryId: 3 },
  { color: "tertiary", category: "Personal", categoryId: 1 },
];

const themeValues = {
  primary: "#F6D7A7",
  secondary: "#C8E3D4",
  tertiary: "#577BC1",
};

const CheckboxGroup = Checkbox.Group;

const calendarOptions = ["EVENT", "BIRTHDAY", "HOLIDAY", "OTHER"];

function CalendarPage(): ReactElement {
  const calendarRef = useRef<any>(null);
  const [checkedList, setCheckedList] = React.useState(calendarOptions);
  const [form] = Form.useForm();
  const [events, setEvents] = useState<any[]>([]);
  const [calendarMeta, setCalendarMeta] = useState({
    month: moment().format("MMMM"),
    startDate: moment().startOf("month").format("YYYY-MM-DD"),
    endDate: moment().endOf("month").format("YYYY-MM-DD"),
  });
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState({
    id: 0,
    title: "New Event",
    dateTime: [],
    categoryId: 0,
  });

  const handleEventClick = (clickInfo: any) => {
    let targetEvent;
    const { id, url } = clickInfo.event;
    if (id) {
      targetEvent = events.find((_item: any) => _item.id.toString() === id);
      console.log(targetEvent, targetEvent);
      setSelectedEvent({
        ...targetEvent,
        dateTime: [moment(targetEvent.start), moment(targetEvent.end)],
      });
      setIsEventModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsEventModalOpen(false);
  };

  const calendarEventMeta = useQuery([CALENDAR_EVENT, calendarMeta], () => {
    let q: ListQueryCalendarDTO = {
      startDate: calendarMeta.startDate,
      endDate: calendarMeta.endDate,
    };
    return _findAllCalendarEvent(q);
  });

  function setEventState() {
    let nextState;
    nextState = displayColoredEvents(calendarEventMeta?.data);

    setEvents(nextState);
  }

  const onSelectMonth = (_monthNumber) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(`2022-${_monthNumber?.padStart(2, "0")}-01`);
    setCalendarMeta({
      startDate: moment(calendarRef.current.getApi().getDate())
        .startOf("month")
        .format("YYYY-MM-DD"),
      endDate: moment(calendarRef.current.getApi().getDate())
        .endOf("month")
        .format("YYYY-MM-DD"),
      month: moment(calendarRef.current.getApi().getDate()).format("MMMM"),
    });
  };

  function displayColoredEvents(events) {
    if (!Array.isArray(events)) return;
    const coloredEvents = events.map((event: any) => {
      const coloredEvent = { ...event };
      if (event.categoryId) {
        const foundColor = colorsMap.find(
          (x) => (x as any).categoryId === event.categoryId
        );
        if (foundColor) {
          coloredEvent.color = (themeValues as any)[foundColor.color];
        }
      }
      return coloredEvent;
    });

    return coloredEvents;
  }

  function filterEventType(_categoryIds: CheckboxValueType[]) {
    let nextState: any[] = [];
    let tempState = [];
    let events = [];
    if (_categoryIds.length > 0) {
      for (let i = 0; i < _categoryIds.length; i++) {
        tempState = calendarEventMeta?.data?.filter(
          (_event: any) => _event.categoryId === _categoryIds[i]
        );
        nextState = [...nextState, ...tempState];
      }

      events = displayColoredEvents(nextState);
    } else {
      events = displayColoredEvents(calendarEventMeta.data);
    }

    setEvents(events);
  }

  useEffect(() => {
    if (calendarEventMeta.isSuccess) {
      setEventState();
    }
  }, [calendarEventMeta.data]);

  return (
    <Row className="container mx-auto pt-10">
      <Col lg={24}>
        <Row justify="space-between">
          <Form form={form} layout="inline" className="flex w-full">
            <Form.Item name="month">
              <Select
                placeholder="MONTH"
                style={{ width: 150 }}
                onChange={onSelectMonth}
              >
                <Select.Option value="1">Jan</Select.Option>
                <Select.Option value="2">Feb</Select.Option>
                <Select.Option value="3">Mar</Select.Option>
                <Select.Option value="4">Apr</Select.Option>
                <Select.Option value="5">May</Select.Option>
                <Select.Option value="6">Jun</Select.Option>
                <Select.Option value="7">Jul</Select.Option>
                <Select.Option value="8">Aug</Select.Option>
                <Select.Option value="9">Sep</Select.Option>
                <Select.Option value="10">Oct</Select.Option>
                <Select.Option value="11">Nov</Select.Option>
                <Select.Option value="12">Dec</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="2022">
                <Select.Option value="2021">2021</Select.Option>
                <Select.Option value="2022">2022</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <CheckboxGroup onChange={filterEventType}>
                <Row gutter={[0, 3]}>
                  <Col
                    lg={10}
                    className="bg-yellow-400 p-1 rounded-md m-1 ml-5 text-center"
                  >
                    <Checkbox value={2} className="">
                      EVENT
                    </Checkbox>
                  </Col>
                  <Col
                    lg={10}
                    className="bg-blue-400 p-1 rounded-md m-1  ml-5 text-center"
                  >
                    <Checkbox value={3}>BIRTHDAY</Checkbox>
                  </Col>
                  <Col
                    lg={10}
                    className="bg-red-400 p-1 rounded-md m-1  ml-5 text-center"
                  >
                    <Checkbox value={4}>HOLIDAY</Checkbox>
                  </Col>
                  <Col
                    lg={10}
                    className="bg-green-400 p-1 rounded-md m-1  ml-5 text-center"
                  >
                    <Checkbox value={1}>OTHER</Checkbox>
                  </Col>
                </Row>
              </CheckboxGroup>
            </Form.Item>
          </Form>
        </Row>
      </Col>
      <Col lg={24}>
        <FullCalendar
          ref={calendarRef}
          schedulerLicenseKey={FULL_CANLENDAR_LICENSE}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            bootstrapPlugin,
          ]}
          headerToolbar={false}
          initialView="dayGridMonth"
          themeSystem="bootstrap"
          editable
          selectable
          selectMirror
          dayMaxEvents
          eventClick={handleEventClick}
          events={events}
          weekends
          locale={"th"}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
          }}
        />
      </Col>
      <EventModal
        event={selectedEvent}
        visible={isEventModalOpen}
        close={handleCloseModal}
      />
    </Row>
  );
}

export default CalendarPage;
