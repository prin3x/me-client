import { Col, Row, Image } from 'antd';
import React, { ReactElement } from 'react';

interface Props {}

function HolidaysHero({}: Props): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
          src='/assets/holiday-hero.svg'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default HolidaysHero;
