import React, { ReactElement } from 'react';
import { Button, Col, Image, Row } from 'antd';
import LayoutHOC from '../../layout/LayoutHOC';
import PrivacyPolicyHero from '../../components/privacy-policy/PrivacyPolicyHero';
import CompanyContactHero from '../../components/company-contact/CompanyContactHero';

interface Props {}

function CompanyContactPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyContactHero />
        <Row className='container mx-auto text-primary-color'>
          <Col span={24}>
            <Row justify='center' className='px-10  pt-10'>
              <Col span={12}>
                <Image
                  src='/assets/me-logo.svg'
                  alt='mindedgelogo'
                  width={200}
                />
              </Col>
              <Col span={12}>
                <div className='flex flex-col'>
                  <h3 className='font-semibold  text-primary-color'>
                    บริษัท มายด์เอจ อินโนเวชั่น จำกัด
                  </h3>
                  <div>เลขที่ 1 ถนน รามคำแหง ซ. รามคำแหง 60/4, 60/5</div>
                  <div>แขวง หัวหมาก เขต บางกะปิ กรุงเทพฯ 10240</div>
                  <div>โทร. 02-374-4484 (Payment & Account) </div>
                  <div>เลขประจำตัวผู้เสียภาษี : 01355 55014 758</div>
                </div>
              </Col>
            </Row>

            <Row justify='center' className='px-10  pt-10'>
              <Col span={12}>
                <Image
                  src='/assets/me-recruit.svg'
                  alt='mindedgelogo'
                  width={200}
                />
              </Col>
              <Col span={12}>
                <div className='flex flex-col'>
                  <h3 className='font-semibold  text-primary-color'>
                  บริษัท จัดหางาน มายด์เอจ จำกัด
                  </h3>
                  <div>เลขที่ 1 ถนน รามคำแหง ซ. รามคำแหง 60/4, 60/5</div>
                  <div>แขวง หัวหมาก เขต บางกะปิ กรุงเทพฯ 10240</div>
                  <div>โทร. 02-374-4484 (Payment & Account)</div>
                  <div>เลขประจำตัวผู้เสียภาษี : 01355 54007 286</div>
                </div>
              </Col>
            </Row>

            <Row justify='center' className='px-10  pt-10'>
              <Col span={12}>
                <Image
                  src='/assets/meu-logo.svg'
                  alt='mindedgelogo'
                  width={150}
                />
              </Col>
              <Col span={12}>
              <div className='flex flex-col'>
                  <h3 className='font-semibold  text-primary-color'>
                  บริษัท มี แอนด์ ยู เอ็นเตอร์เทนเมนท์ จำกัด
                  </h3>
                  <div>1091/241 อาคารซิตี้ลิงค์ ชั้นที่ 6 ห้องเลขที่ ซี  5</div>
                  <div>ซอยเพชรบุรี 35 ถนนเพชรบุรีตัดใหม่ แขวงมักกะสัน </div>
                  <div>เขตราชเทวี กรุงเทพมหานคร 10400</div>
                  <div>โทร. 02-374-4484 (Payment & Account)</div>
                  <div>เลขประจำตัวผู้เสียภาษี : 01055 63093 882</div>
                </div>
              </Col>
            </Row>

            <Row justify='center' className='px-10  pt-10'>
              <Col span={12}>
                <Image
                  src='/assets/foodberg-logo.svg'
                  alt='mindedgelogo'
                  width={100}
                />
              </Col>
              <Col span={12}>
                <div className='flex flex-col'>
                  <h3 className='font-semibold  text-primary-color'>
                  บริษัท ฟู้ดเบิร์ก จำกัด
                  </h3>
                  <div>เลขที่ 1 ถนน รามคำแหง ซ. รามคำแหง 60/4, 60/5</div>
                  <div>แขวง หัวหมาก เขต บางกะปิ กรุงเทพฯ 10240</div>
                  <div>โทร. 02-374-4484 (Payment & Account)</div>
                  <div>เลขประจำตัวผู้เสียภาษี : 01055 59123 501</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyContactPage;
