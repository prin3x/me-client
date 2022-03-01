import { Col, Row, Image } from 'antd';
import React, { ReactElement } from 'react';

interface Props {}

function HeroSection({}: Props): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
  fallback=
{imagePlaceholder}
          src='/assets/calendar-hero.svg'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default HeroSection;
