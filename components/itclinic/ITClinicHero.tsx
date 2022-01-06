import { Col, Row, Image } from 'antd';
import React, { ReactElement } from 'react';

function ITClinicHero(): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
          src='/assets/itclinic-hero.svg'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default ITClinicHero;
