import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Select,
} from 'antd';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import LayoutHOC from '../../../layout/LayoutHOC';
import { ICreateMeeting } from '../../../services/meetingRoom/meeting-room.model';
import { _createBooking } from '../../../services/meetingRoom/meeting-room.service';

interface Props {}

function MakeBooking({}: Props): ReactElement {
  const [form] = Form.useForm();
  const io = useRouter();

  const submitRoomBooking = async (_formValues: ICreateMeeting) => {
    let set = {} as any;
    set.title = _formValues.title;
    set.description = _formValues.description;
    set.start = _formValues.start;
    set.end = _formValues.end;
    set.roomId = _formValues.roomId;

    try {
      await _createBooking(set);
      message.success('Created Successfully');
    } catch (e) {
      message.error(e.response.message);
    }
  };

  return (
    <LayoutHOC>
      <>
        <Row justify='center' className='w-full'>
          <Row justify='center' className='w-full mt-10'>
            <Col>
              <div className='uppercase text-primary-color text-xl font-bold'>
                Booking Room
              </div>
            </Col>
          </Row>
          <Row justify='center' className=' mt-5 w-full'>
            <Form
              onFinish={submitRoomBooking}
              form={form}
              colon={false}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14, offset: 2 }}
            >
              <Form.Item name='title' label='Name Meeting'>
                <Input style={{ width: 200 }} />
              </Form.Item>
              <Form.Item name='description' label='Description'>
                <Input style={{ width: 200 }} />
              </Form.Item>
              <Form.Item name='start' label='Start'>
                <DatePicker
                  value={moment(io.query.date)}
                  showTime
                  style={{ width: 200 }}
                />
              </Form.Item>
              <Form.Item name='end' label='End'>
                <DatePicker
                  value={moment(io.query.date)}
                  showTime
                  style={{ width: 200 }}
                />
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
              <Form.Item initialValue={1} name='roomId' label='Room'>
                <Select style={{ width: 200 }}>
                  <Select.Option value={1}>Internal</Select.Option>
                </Select>
              </Form.Item>
              <Row className='mt-10 ml-16'>
                <Col>
                  <Form.Item>
                    <Button className='secondary-btn rounded-btn'>Edit</Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button
                      htmlType='submit'
                      className='rounded-btn ml-6'
                      type='primary'
                    >
                      Save Booking
                    </Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button className='rounded-btn ml-6' danger type='primary'>
                      Delete
                    </Button>
                  </Form.Item>
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
