import React, { ReactElement } from 'react';
import { Col, Row, Image } from 'antd';
interface Props {}

function CompanyContactHero({}: Props): ReactElement {
  return (
    <Row className='container mx-auto pt-10'>
      <Col span={24}>
        <Image
          src='/assets/company-contact-hero.png'
          preview={false}
          alt='calendar-hero'
        />
      </Col>
    </Row>
  );
}

export default CompanyContactHero;
