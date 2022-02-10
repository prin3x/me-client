import { PlusOutlined } from "@ant-design/icons";
import { Badge, Button, Calendar, Col, Form, message, Row, Select } from "antd";
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingMeetingHero from "../../components/booking/BookingMeetingHero";
import LayoutHOC from "../../layout/LayoutHOC";
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
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState<string>("1");
  const router = useRouter();

  const meetingEventsQuery = useQuery(["meeting-events"], _getAllBookingEvents);
  const roomsMeta = useQuery(["rooms"], _getAllRooms);

  function onPanelChange(value, mode) {
    console.log(value, mode, "value, mode");
  }

  function onSelect(date) {
    setSelectDate(date.format("YYYY-MM-DD"));
  }

  const getAllRooms = async (floor: string) => {
    let res;
    try {
      res = await _getRoomByFloor(floor);
      setRooms(res.data);
    } catch (e) {
      message.error("Cannot fetch rooms");
    }
  };

  const selectFloor = (_floor) => {
    setFloor(_floor);
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
          style={{ position: "absolute", bottom: -17, left: 9 }}
        />
      );
    }
  }

  useEffect(() => {
    getAllRooms(floor);
  }, [floor]);

  return (
    <LayoutHOC>
      <div>
        <BookingMeetingHero />
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <div className="font-semibold text-2xl text-primary-color">
              List Meeting Room
            </div>
            <Row className="container mx-auto pt-10">
              <Col span={24}>
                <Row>
                  <Form className="flex w-full">
                    <Col md={14}>
                      {/* <div className="flex">
                        <Form.Item>
                          <Select placeholder="Floor 3" onChange={selectFloor}>
                            <Select.Option value="1">Floor 1</Select.Option>
                            <Select.Option value="2">Floor 2</Select.Option>
                            <Select.Option value="3">Floor 3</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Select placeholder="Production Room">
                            <Select.Option value="Production Room">
                              Production Room
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div> */}
                    </Col>
                    <Col md={10}>
                      <Form.Item>
                        <Calendar
                          onPanelChange={onPanelChange}
                          onSelect={onSelect}
                          fullscreen={false}
                          dateCellRender={dateCellRender}
                        />
                      </Form.Item>
                    </Col>
                  </Form>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row justify="start">
              <Button
                type="primary"
                className="rounded-full"
                onClick={() => router.push(`/booking/make?date=${selectDate}`)}
              >
                <PlusOutlined />
                Booking Room
              </Button>
            </Row>
          </Col>
          <Col span={24}>
            <MeetingRoomCalendar
              rooms={roomsMeta?.data}
              selectDate={selectDate}
              meetingEventsQuery={meetingEventsQuery}
            />
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default BookingMeetingRoom;
