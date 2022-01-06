import React, { ReactElement } from 'react';
import { Button, Col, Row } from 'antd';
import CompanyPolicyHero from '../../components/company-policy/CompanyPolicyHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function CompanyPolicyPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyPolicyHero />
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

export default CompanyPolicyPage;
