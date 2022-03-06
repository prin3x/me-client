import { Col, Row, Image } from 'antd';
import React, { ReactElement } from 'react';

interface Props {}

function BookingMeetingHero({}: Props): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
          src='/assets/booking-hero.png'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default BookingMeetingHero;
