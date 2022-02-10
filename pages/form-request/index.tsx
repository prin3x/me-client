import { DownCircleFilled } from '@ant-design/icons';
import { Col, Collapse, Row } from 'antd';
import React, { ReactElement } from 'react';
import FormRequestHero from '../../components/form-request/FormRequestHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function FormRequest({}: Props): ReactElement {
  function callback(_: any) {
    console.log(_);
  }

  return (
    <LayoutHOC>
      <div>
        <FormRequestHero />
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Collapse
            className='form-collapse'
              defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition={'right'}
            >
              <Collapse.Panel
                header='Training'
                key='1'
                showArrow={true}
                className='bg-primary-color text-xl font-semibold'
                style={{color: 'white'}}
              >
                <p className='text-lg font-regular'>In-House Training Request</p>
                <p className='text-lg font-regular'>Public Training Request</p>
                <p className='text-lg font-regular'>แบบฟอร์มยืม-เบิกอุปกรณ์ตกแต่ง</p>
              </Collapse.Panel>
              <Collapse.Panel
                header='QMD'
                key='2'
                showArrow={true}
                className='bg-primary-color text-xl font-semibold'
              >
                <p className='text-lg font-regular'>Job Request</p>
              </Collapse.Panel>
              <Collapse.Panel
                header='F&A'
                key='3'
                showArrow={true}
                className='bg-primary-color text-xl font-semibold'
              >
                <p className='text-lg font-regular'>แบบฟอร์มชี้แจ้งค่าใช้จ่าย</p>
                <p className='text-lg font-regular'>แบบฟอร์มเบิกค่าเดินทาง</p>
              </Collapse.Panel>
              <Collapse.Panel
                header='HR'
                key='4'
                showArrow={true}
                className='bg-primary-color text-xl font-semibold'
              >
                <p className='text-lg font-regular'>แบบฟอร์มขอหนังสือรับรอง</p>
                <p className='text-lg font-regular'>แบบฟอร์มเบิกค่ารักษาพยาบาล</p>
              </Collapse.Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default FormRequest;
