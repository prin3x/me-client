import {
  CaretLeftOutlined,
  CaretRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Badge, Button, Calendar, Col, Form, message, Row, Select } from "antd";
import moment from "moment";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingMeetingHero from "../../components/booking/BookingMeetingHero";
import LayoutHOC from "../../layout/LayoutHOC";
import { ListQueryCalendarDTO } from "../../services/calendar/calendar.model";
import { _getAllFloors } from "../../services/floor/floor.service";
import {
  _getAllBookingEvents,
  _getAllRooms,
  _getRoomByFloor,
} from "../../services/meetingRoom/meeting-room.service";

const MeetingRoomCalendar = dynamic(
  () => import("../../components/booking/MeetingRoomCalendar"),
  {
    ssr: false,
  }
);

function BookingMeetingRoom(): ReactElement {
  const [selectDate, setSelectDate] = useState(moment().format("YYYY-MM-DD"));
  const floorMetaData = useQuery(
    ["available floors"],
    () => _getAllFloors()
  );
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState<string>("0");
  const router = useRouter();
  const [form] = Form.useForm();
  const [selectedRoomId, setSelectedRoomId] = useState<number>(0);
  const [bookingInterval, setBookingInterval] = useState({
    startDate: moment().startOf("month").format("YYYY-MM-DD"),
    endDate: moment().add(1,"M").endOf("month").format("YYYY-MM-DD"),
  });

  const meetingEventsQuery = useQuery(
    ["meeting-events", bookingInterval],
    () => {
      let q: ListQueryCalendarDTO = {
        startDate: bookingInterval.startDate,
        endDate: bookingInterval.endDate,
      };
      return _getAllBookingEvents(q);
    }
  );

  function onPanelChange(value, mode) {
  }

  function onSelect(date) {
    setSelectDate(date.format("YYYY-MM-DD"));
  }

  const getAllRooms = async (floor: string = "") => {
    let res;
    try {
      res = await _getRoomByFloor(floor);
      setRooms(res);
    } catch (e) {
      message.error("Cannot fetch rooms");
    }
  };

  const selectFloor = (_floor) => {
    setFloor(_floor);
    form.setFieldsValue({room : undefined})
  };

  function getListData(value) {
    let badge;
    if (!meetingEventsQuery.isSuccess) return;
    const result = meetingEventsQuery.data.find((_item) =>
      moment(_item?.start).startOf("day").isSame(value.startOf("day"))
    );
    if (result) {
      badge = {
        type: "success",
      };
    }

    return badge;
  }

  function dateCellRender(value) {
    const badge = getListData(value);
    if (badge) {
      return (
        <Badge
          status={badge.type}
          style={{ position: "absolute", bottom: -16, left: 16 }}
        />
      );
    }
  }

  const onSelectRoomId = (_values) => {
    setSelectedRoomId(_values);
  };

  function headerRender({ value, onChange }) {
    const current = value.clone();

    return (
      <div>
        <div
          className="border-2 rounded-xl text-center p-3 text-xl font-bold"
          style={{ borderColor: "#eee" }}
        >
          {moment(selectDate).format("DD MMMM yyyy")}
        </div>
        <Row gutter={8} justify="center" className="mt-4">
          <Col>
            <Row align="middle" gutter={35}>
              <Col>
                <div
                  className="h-12 cursor-pointer"
                  onClick={() => {
                    const newValue = value.clone();
                    newValue.month(current.month() - 1);
                    const setNewMettingInterval = {
                      startDate: newValue.startOf("month").format("YYYY-MM-DD"),
                      endDate: newValue.add(1,"M").endOf("month").format("YYYY-MM-DD"),
                    };
                    setBookingInterval(setNewMettingInterval);
                    onChange(newValue);
                  }}
                >
                  <CaretLeftOutlined style={{ fontSize: 16 }} />
                </div>
              </Col>
              <Col>
                <div className="text-lg font-bold uppercase">
                  {current.format("MMMM")}
                </div>
              </Col>
              <Col>
                <div
                  className="h-12 cursor-pointer"
                  onClick={() => {
                    const newValue = value.clone();
                    newValue.month(current.month() + 1);
                    const setNewMettingInterval = {
                      startDate: newValue.startOf("month").format("YYYY-MM-DD"),
                      endDate: newValue.add(1,"M").endOf("month").format("YYYY-MM-DD"),
                    };
                    setBookingInterval(setNewMettingInterval);
                    onChange(newValue);
                  }}
                >
                  <CaretRightOutlined style={{ fontSize: 16 }} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

  useEffect(() => {
    getAllRooms(floor);
  }, [floor]);

  return (
    <LayoutHOC>
      <div className="meeting-room">
        <BookingMeetingHero />
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <div className="font-bold text-xl text-primary-color">
              List Meeting Room
            </div>
            <Row className="container mx-auto pt-10">
              <Col span={24}>
                <Row>
                  <Form form={form} className="flex w-full">
                    <Col lg={14} md={14}>
                      <Row>
                        <Form.Item name="floor">
                          <Select
                            style={{ width: 150 }}
                            size="large"
                            placeholder="Floor"
                            onChange={selectFloor}
                          >
                            {floorMetaData.isSuccess && floorMetaData.data.length > 0
                                ? floorMetaData.data.map((floor) => (
                                    <Select.Option
                                      key={floor.floor}
                                      value={floor.floor}
                                    >
                                      {floor.floor}
                                    </Select.Option>
                                  ))
                                : null}
                          </Select>
                        </Form.Item>
                        <Col className="flex flex-col items-end">
                          <Form.Item name="room" initialValue={undefined}>
                            <Select
                              style={{ width: 350, marginLeft: 20 }}
                              placeholder="Room"
                              onChange={onSelectRoomId}
                            >
                              {rooms.length > 0
                                ? rooms.map((room) => (
                                    <Select.Option
                                      key={room.id}
                                      value={room.id}
                                    >
                                      {room.name}
                                    </Select.Option>
                                  ))
                                : null}
                            </Select>
                          </Form.Item>
                          <Button
                            size="large"
                            disabled={!selectedRoomId}
                            className="rounded-full ml-5"
                            style={{ borderRadius: "20px" }}
                            onClick={() =>
                              router.push(`/booking/${selectedRoomId}`)
                            }
                          >
                            View Room Detail
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={10} className="-mt-20">
                      <Form.Item>
                        <Calendar
                          className="meeting-room-calendar"
                          onPanelChange={onPanelChange}
                          onSelect={onSelect}
                          fullscreen={false}
                          dateCellRender={dateCellRender}
                          headerRender={headerRender}
                          value={moment(selectDate)}
                        />
                      </Form.Item>
                    </Col>
                  </Form>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="container mx-auto -mt-20">
          <Col span={24}>
            <Row justify="start">
              <Link href={`/booking/make?date=${selectDate}`} passHref>
                <Button
                  size="large"
                  type="primary"
                  className="rounded-full"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="flex items-center">
                    <PlusOutlined />
                    <span className="ml-2">Booking Room</span>
                  </div>
                </Button>
              </Link>
            </Row>
          </Col>
          <Col span={24} className="mt-20">
            <MeetingRoomCalendar
              setBookingInterval={setBookingInterval}
              rooms={rooms || []}
              selectDate={selectDate}
              setSelectDate={setSelectDate}
              meetingEventsQuery={meetingEventsQuery}
            />
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default BookingMeetingRoom;
