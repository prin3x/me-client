import React, { ReactElement } from 'react';
import { Button, Col, Row } from 'antd';
import LayoutHOC from '../../layout/LayoutHOC';
import PrivacyPolicyHero from '../../components/privacy-policy/PrivacyPolicyHero';

interface Props {}

function PrivacyPolicy({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <PrivacyPolicyHero />
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
            <Row justify='center' className='gap-5'>
              <Button type='primary'>ME</Button>
              <Button type='primary'>MR</Button>
              <Button type='primary'>MY</Button>
              <Button type='primary'>FB</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default PrivacyPolicy;
