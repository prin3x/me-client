import { PlusOutlined } from '@ant-design/icons';
import { Button, Calendar, Col, Form, Row, Select } from 'antd';
import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';
import MeetingRoomCalendar from '../../components/booking/MeetingRoomCalendar';
import LayoutHOC from '../../layout/LayoutHOC';

const BookingMeetingHero = dynamic(
  () => import('../../components/booking/BookingMeetingHero'),
  {
    ssr: false,
  }
);

function BookingMeetingRoom(): ReactElement {
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
                          <Select placeholder='Floor 3'>
                            <Select.Option value='Floor 3'>
                              Floor 3
                            </Select.Option>
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
                        <Calendar fullscreen={false} />
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
              <Button type='primary' className='rounded-full'>
                <PlusOutlined />
                Booking Room
              </Button>
            </Row>
          </Col>
          <Col span={24}>
            <MeetingRoomCalendar />
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default BookingMeetingRoom;
