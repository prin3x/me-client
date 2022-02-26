import { Button, Col, Image, Row } from 'antd';
import React, { ReactElement } from 'react';
import CompanyProfileHero from '../../components/company-profile/CompanyProfileHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function CompanyProfilePage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyProfileHero />
        <Row className='container mx-auto rounded-xl pt-5 mt-10 border-primary-color h-full'>
          <Col span={24}>
            <Row>
              <Image
                src='/assets/Company_Profile_1.png'
                alt='Company_Profile_1'
                preview={false}
              />
            </Row>
            <Row>
              <Image
                src='/assets/Company_Profile_2.png'
                alt='Company_Profile_2'
                preview={false}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyProfilePage;
