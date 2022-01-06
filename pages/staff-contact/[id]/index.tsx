import { Col, Row, Image } from 'antd';
import React, { ReactElement } from 'react';
import LayoutHOC from '../../../layout/LayoutHOC';

interface Props {}

function SingleCantactPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Image
              src='/assets/staff-contact.svg'
              preview={false}
              alt='staff-contact'
            />
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Col span={12}>
            <Row justify='center'>
              <div className='h-44 bg-gray-200 w-44 rounded-xl'></div>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify='start'>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Name
                </div>
                <div className=''>Siraphop Chatchaipholrat</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Name(TH)
                </div>
                <div className=''>สิรภพ ฉัตรชัยพลรัตน์</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Nickname
                </div>
                <div className=''>ริว</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Email
                </div>
                <div className=''>siraphopc@mindedge.co.th</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  IP Phone
                </div>
                <div className=''>2168</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Staff ID
                </div>
                <div className=''>2200260</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Company
                </div>
                <div className=''>Mind Edge Recruitment</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Department
                </div>
                <div className=''>Human Resource</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Division
                </div>
                <div className=''>Training & Development</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Position
                </div>
                <div className=''>Training Coordinator</div>
              </Col>
              <Col className='flex w-full'>
                <div className='label min-width-full w-24 text-primary-color font-semibold'>
                  Birthday
                </div>
                <div className=''>19 September</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default SingleCantactPage;
