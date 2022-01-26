import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import LayoutHOC from '../../../layout/LayoutHOC';

interface Props {}

function MakeBooking({}: Props): ReactElement {
  const [form] = Form.useForm();
  const io = useRouter()

console.log(moment(io.query.date));
  return (
    <LayoutHOC>
      <>
        <Row>
          <Row justify='center' className='w-full mt-10'>
            <Col>
              <div className='uppercase text-primary-color text-xl font-bold'>
                Booking Room
              </div>
            </Col>
          </Row>
          <Row justify='start' className='pl-28 mt-5 w-full'>
            <Form
              colon={false}
              labelCol={{ lg: 6 }}
              wrapperCol={{ lg: 14, offset: 2 }}
            >
              <Form.Item label='Name Meeting'>
                <Input style={{ width: 200 }} />
              </Form.Item>
              <Form.Item label='Description'>
                <Input style={{ width: 200 }} />
              </Form.Item>
              <Form.Item label='Start'>
                <DatePicker value={moment(io.query.date)} showTime style={{ width: 200 }} />
              </Form.Item>
              <Form.Item label='End'>
                <DatePicker value={moment(io.query.date)} showTime  style={{ width: 200 }} />
              </Form.Item>
              <Form.Item label='Area'>
                <Select
                  defaultValue={'4'}
                  style={{ width: 200 }}
                  className='selector-w-10'
                >
                  <Select.Option value='4'>Floor 4th</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Type'>
                <Select
                  defaultValue={'4'}
                  style={{ width: 200 }}
                  className='selector-w-10'
                >
                  <Select.Option value='4'>Floor 4th</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Room'>
                <Select defaultValue={'4'} style={{ width: 200 }}>
                  <Select.Option value='4'>Internal</Select.Option>
                </Select>
              </Form.Item>
              <Row className='mt-10 ml-32'>
                <Col>
                  <Button className='secondary-btn rounded-btn'>Edit</Button>
                </Col>
                <Col>
                  <Button className='rounded-btn ml-6' type='primary'>
                    Save Booking
                  </Button>
                </Col>
                <Col>
                  <Button className='rounded-btn ml-6' danger type='primary'>
                    Delete
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Row>
      </>
    </LayoutHOC>
  );
}

export default MakeBooking;
