import React, { ReactElement } from 'react';
import { Col, Row, Image } from 'antd';

interface Props {}

function FormRequestHero({}: Props): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
          src='/assets/form-request-hero.svg'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default FormRequestHero;
