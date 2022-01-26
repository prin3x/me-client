import React, { ReactElement } from 'react';
import { Button, Col, Image, Row } from 'antd';
import CompanyPolicyHero from '../../components/company-policy/CompanyPolicyHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function CompanyPolicyPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyPolicyHero />
        <Row className='container mx-auto rounded-xl pt-5 mt-10 border-primary-color'>
          <Col span={24}>
            <Row
              justify='center'
              className='uppercase text-3xl font-bold text-primary-color'
            >
              infographic
            </Row>
            <Row>
              <Image
                src='/assets/Company_Policy.png'
                alt='Company_Policy'
                preview={false}
              />
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
