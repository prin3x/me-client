import React, { ReactElement } from 'react';
import { Button, Col, Image, Row } from 'antd';
import LayoutHOC from '../../layout/LayoutHOC';
import CompanyBenefitHero from '../../components/company-benefit/CompanyBenefitHero';

interface Props {}

function CompanyBenefits({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyBenefitHero />
        <Row className='container mx-auto rounded-xl pt-5 mt-10 border-primary-color'>
          <Col span={24}>
            <Row>
              <Image
                src='/assets/Company_Benefit.png'
                alt='Company_Benefit'
                preview={false}
              />
            </Row>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col span={24}>
            <Row justify='center'>
              <Button size="middle" type='primary' style={{borderRadius: '36px', width: '10rem', lineHeight: 1, fontWeight: 'bold'}}>ฉบับเต็มคลิกที่นี่</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyBenefits;
