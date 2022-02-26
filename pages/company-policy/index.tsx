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
            <Row>
              <Image
                src='/assets/Company_Policy.png'
                alt='Company_Policy'
                preview={false}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyPolicyPage;
