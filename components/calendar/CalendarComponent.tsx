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
import {
  ECalendarEventType,
  ListQueryCalendarDTO,
} from "../../services/calendar/calendar.model";
import EventModal from "./EventModal";

const colorsMap = [
  { color: "primary", categoryName: ECalendarEventType.EVENT },
  { color: "secondary", categoryName: ECalendarEventType.BIRTHDAY },
  { color: "tertiary", categoryName: ECalendarEventType.HOLIDAY },
  { color: "fourth", categoryName: ECalendarEventType.OTHER },
];

const themeValues = {
  primary: "#F1C232",
  secondary: "#4285F4",
  tertiary: "#EA4335",
  fourth: "#34A853",
};

const CheckboxGroup = Checkbox.Group;

const calendarOptions = [
  ECalendarEventType.EVENT,
  ECalendarEventType.BIRTHDAY,
  ECalendarEventType.HOLIDAY,
  ECalendarEventType.OTHER,
];

function CalendarPage(): ReactElement {
  const calendarRef = useRef<any>(null);
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
    categoryName: ECalendarEventType.EVENT,
  });

  const handleEventClick = (clickInfo: any) => {
    let targetEvent;
    const { id, url } = clickInfo.event;
    if (id) {
      targetEvent = events.find((_item: any) => _item.id.toString() === id);
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
      if (event.categoryName) {
        const foundColor = colorsMap.find(
          (x) => (x as any).categoryName === event.categoryName
        );
        if (foundColor) {
          coloredEvent.color = (themeValues as any)[foundColor.color];
        }
      }
      const index = switchCategoryIndex(coloredEvent.categoryName);
      coloredEvent.index = index;

      return coloredEvent;
    });

    return coloredEvents;
  }

  function switchCategoryIndex(_categoryName) {
    switch (_categoryName) {
      case ECalendarEventType.HOLIDAY:
        return "a";

      case ECalendarEventType.EVENT:
        return "b";

      case ECalendarEventType.BIRTHDAY:
        return "c";

      case ECalendarEventType.OTHER:
        return "d";

      default:
        break;
    }
  }

  function filterEventType(_categoryNames: ECalendarEventType[]) {
    let nextState: any[] = [];
    let tempState = [];
    let events = [];
    if (_categoryNames.length > 0) {
      for (let i = 0; i < _categoryNames.length; i++) {
        tempState = calendarEventMeta?.data?.filter(
          (_event: any) => _event.categoryName === _categoryNames[i]
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
    <Row className="container caleandar mx-auto pt-10">
      <Col lg={24}>
        <Row justify="space-between" align="middle">
          <Form form={form} layout="inline" className="flex w-full">
            <Row align="middle" className="w-full">
              <Form.Item
                name="month"
                initialValue={(moment().month() + 1).toString()}
              >
                <Select
                  placeholder="MONTH"
                  style={{ width: 200 }}
                  onChange={onSelectMonth}
                >
                  <Select.Option value="1">January</Select.Option>
                  <Select.Option value="2">February</Select.Option>
                  <Select.Option value="3">March</Select.Option>
                  <Select.Option value="4">April</Select.Option>
                  <Select.Option value="5">May</Select.Option>
                  <Select.Option value="6">June</Select.Option>
                  <Select.Option value="7">July</Select.Option>
                  <Select.Option value="8">August</Select.Option>
                  <Select.Option value="9">September</Select.Option>
                  <Select.Option value="10">October</Select.Option>
                  <Select.Option value="11">November</Select.Option>
                  <Select.Option value="12">December</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select style={{ width: 150 }} size="large" placeholder="2022">
                  <Select.Option value="2022">2022</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className="ml-auto" style={{ marginLeft: "auto" }}>
                <CheckboxGroup
                  onChange={filterEventType}
                  defaultValue={[
                    ECalendarEventType.EVENT,
                    ECalendarEventType.BIRTHDAY,
                    ECalendarEventType.HOLIDAY,
                    ECalendarEventType.OTHER,
                  ]}
                >
                  <Row gutter={[0, 3]} justify="end">
                    <Col
                      lg={6}
                      className="bg-yellow-custom p-1 rounded-md m-2 ml-10 text-center"
                    >
                      <Checkbox
                        value={ECalendarEventType.EVENT}
                        className="text-white font-bold"
                      >
                        EVENT
                      </Checkbox>
                    </Col>
                    <Col
                      lg={6}
                      className="bg-blue-custom p-1 rounded-md m-2  ml-10 text-center"
                    >
                      <Checkbox
                        value={ECalendarEventType.BIRTHDAY}
                        className="text-white font-bold"
                      >
                        BIRTHDAY
                      </Checkbox>
                    </Col>
                    <Col
                      lg={6}
                      className="bg-red-custom p-1 rounded-md m-2  ml-10 text-center"
                    >
                      <Checkbox
                        value={ECalendarEventType.HOLIDAY}
                        className="text-white font-bold"
                      >
                        HOLIDAY
                      </Checkbox>
                    </Col>
                    <Col
                      lg={6}
                      className="bg-green-custom p-1 rounded-md m-2  ml-10 text-center"
                    >
                      <Checkbox
                        value={ECalendarEventType.OTHER}
                        className="text-white font-bold"
                      >
                        OTHER
                      </Checkbox>
                    </Col>
                  </Row>
                </CheckboxGroup>
              </Form.Item>
            </Row>
          </Form>
        </Row>
      </Col>
      <Col lg={24} className="mt-10 calendar-container">
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
          dayHeaderClassNames={"day-header"}
          dayHeaderFormat={{ weekday: "long" }}
          eventOrder={["index"]}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
          }}
        />
      </Col>
      {isEventModalOpen && (
        <EventModal
          event={selectedEvent}
          visible={isEventModalOpen}
          close={handleCloseModal}
        />
      )}
    </Row>
  );
}

export default CalendarPage;
