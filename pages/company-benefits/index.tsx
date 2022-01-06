import React, { ReactElement } from 'react';
import { Button, Col, Row } from 'antd';
import LayoutHOC from '../../layout/LayoutHOC';
import CompanyBenefitHero from '../../components/company-benefit/CompanyBenefitHero';

interface Props {}

function CompanyBenefits({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyBenefitHero />
        <Row className='container mx-auto rounded-xl pt-5 mt-10 border-primary-color h-96'>
          <Col span={24}>
            <Row
              justify='center'
              className='uppercase text-3xl font-bold text-primary-color'
            >
              infographic
            </Row>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col span={24}>
            <Row justify='center'>
              <Button type='primary'>อ่านฉบับเต็ม</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyBenefits;
