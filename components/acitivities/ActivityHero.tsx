import { Col, Row, Image } from 'antd';
import React, { ReactElement } from 'react';

function ActivityHero(): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
          src='/assets/activity-hero.svg'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default ActivityHero;
