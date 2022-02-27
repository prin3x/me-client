import {
  CaretLeftOutlined,
  CaretRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Calendar,
  Col,
  Form,
  message,
  Row,
  Select,
  Typography,
} from "antd";
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
  const [selectedRoomId, setSelectedRoomId] = useState("");

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

  const onSelectRoomId = (_values) => {
    setSelectedRoomId(_values);
  };

  function headerRender({ value, onChange }) {
    const current = value.clone();

    return (
      <div>
        <div className="border-2 rounded-xl text-center p-3 text-xl" style={{borderColor: '#eee'}}>
            {moment().format("DD MMMM yyyy")}
        </div>
        <Row gutter={8} justify="center" className='mt-4'>
          <Col>
            <Row align="middle" gutter={20}>
              <Col>
                <div
                  className="h-6 cursor-pointer"
                  onClick={() => {
                    const newValue = value.clone();
                    newValue.month(current.month() - 1);
                    onChange(newValue);
                  }}
                >
                  <CaretLeftOutlined style={{ fontSize: 16 }} />
                </div>
              </Col>
              <Col>
                <div className="text-lg">{current.format("MMMM")}</div>
              </Col>
              <Col>
                <div
                  className="h-6 cursor-pointer"
                  onClick={() => {
                    const newValue = value.clone();
                    newValue.month(current.month() + 1);
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

  useEffect(() => {
    if (!roomsMeta.isSuccess) return;
    setSelectedRoomId(roomsMeta?.data?.[0]?.id);
  }, [roomsMeta.isFetched]);

  return (
    <LayoutHOC>
      <div className='meeting-room'>
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
                      <div className="flex">
                        <Form.Item>
                          <Select placeholder="Floor">
                            <Select.Option value="N/A">NA</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Select
                            style={{ width: 250, marginLeft: 20 }}
                            placeholder="Creative Room"
                            onChange={onSelectRoomId}
                          >
                            {roomsMeta?.data?.length > 0
                              ? roomsMeta?.data?.map((room) => (
                                  <Select.Option key={room.id} value={room.id}>
                                    {room.name}
                                  </Select.Option>
                                ))
                              : null}
                          </Select>
                        </Form.Item>
                        <Button
                          className="rounded-full ml-5"
                          style={{ borderRadius: "8px" }}
                          onClick={() =>
                            router.push(`/booking/${selectedRoomId}`)
                          }
                        >
                          View Room Detail
                        </Button>
                      </div>
                    </Col>
                    <Col md={10} className='-mt-20'>
                      <Form.Item>
                        <Calendar
                          className='meeting-room-calendar'
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
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row justify="start">
              <Button
                type="primary"
                className="rounded-full"
                style={{ borderRadius: "12px" }}
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
