import { PlusOutlined } from '@ant-design/icons';
import { Button, Calendar, Col, Form, message, Row, Select } from 'antd';
import moment from 'moment';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import MeetingRoomCalendar from '../../components/booking/MeetingRoomCalendar';
import LayoutHOC from '../../layout/LayoutHOC';
import {
  _getAllBookingEvents,
  _getAllRooms,
  _getRoomByFloor,
} from '../../services/meetingRoom/meeting-room.service';

const BookingMeetingHero = dynamic(
  () => import('../../components/booking/BookingMeetingHero'),
  {
    ssr: false,
  }
);

function BookingMeetingRoom(): ReactElement {
  const [selectDate, setSelectDate] = useState(moment().format('YYYY-MM-DD'));
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState<string>('1');
  const router = useRouter();

  const meetingEventsQuery = useQuery(['meeting-events'], _getAllBookingEvents);

  function onPanelChange(value, mode) {
    console.log(value, mode, 'value, mode');
  }

  function onSelect(date) {
    setSelectDate(date.format('YYYY-MM-DD'));
    console.log(date);
  }

  const getAllRooms = async (floor: string) => {
    let res;
    try {
      res = await _getRoomByFloor(floor);
      setRooms(res.data);
    } catch (e) {
      message.error('Cannot fetch rooms');
    }
  };

  const selectFloor = (_floor) => {
    setFloor(_floor);
  };
  console.log(rooms,'rooms');

  useEffect(() => {
    getAllRooms(floor);
  }, [floor]);

  return (
    <LayoutHOC>
      <div>
        <BookingMeetingHero />
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <div className='font-semibold text-2xl text-primary-color'>
              List Meeting Room
            </div>
            <Row className='container mx-auto pt-10'>
              <Col span={24}>
                <Row>
                  <Form className='flex w-full'>
                    <Col md={14}>
                      <div className='flex'>
                        <Form.Item>
                          <Select placeholder='Floor 3' onChange={selectFloor}>
                            <Select.Option value='1'>Floor 1</Select.Option>
                            <Select.Option value='2'>Floor 2</Select.Option>
                            <Select.Option value='3'>Floor 3</Select.Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Select placeholder='Production Room'>
                            <Select.Option value='Production Room'>
                              Production Room
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </Col>
                    <Col md={10}>
                      <Form.Item>
                        <Calendar
                          onPanelChange={onPanelChange}
                          onSelect={onSelect}
                          fullscreen={false}
                        />
                      </Form.Item>
                    </Col>
                  </Form>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Row justify='start'>
              <Button
                type='primary'
                className='rounded-full'
                onClick={() => router.push(`/booking/make?date=${selectDate}`)}
              >
                <PlusOutlined />
                Booking Room
              </Button>
            </Row>
          </Col>
          <Col span={24}>
            <MeetingRoomCalendar
              rooms={rooms}
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
