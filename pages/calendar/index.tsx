import { Checkbox, Col, Form, Row, Select } from 'antd';
import dynamic from 'next/dynamic';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import HeroSection from '../../components/calendar/HeroSection';
import LayoutHOC from '../../layout/LayoutHOC';
import { CALENDAR_EVENT } from '../../services/calendar/calendar.queryKey';
import { _findAllCalendarEvent } from '../../services/calendar/calendar.service';
import { useQuery } from 'react-query';

const CalendarComponent = dynamic(
  () => import('../../components/calendar/CalendarComponent'),
  {
    ssr: false,
  }
);

const colorsMap = [
  { color: 'primary', category: 'event', categoryId: 2 },
  { color: 'secondary', category: 'other', categoryId: 3 },
  { color: 'tertiary', category: 'Personal', categoryId: 1 },
];

const themeValues = {
  primary: '#F6D7A7',
  secondary: '#C8E3D4',
  tertiary: '#577BC1',
};

const CheckboxGroup = Checkbox.Group;

const calendarOptions = ['EVENT', 'BIRTHDAY', 'HOLIDAY', 'OTHER'];

function CalendarPage(): ReactElement {
  const [checkedList, setCheckedList] = React.useState(calendarOptions);
  const [form] = Form.useForm();
  const [events, setEvents] = useState([]);
  const { data, isLoading, isSuccess } = useQuery(
    [CALENDAR_EVENT],
    _findAllCalendarEvent
  );

  async function findAllCalendarEvent() {
    const coloredEvents = data.map((event: any) => {
      const coloredEvent = { ...event };
      if (event.categoryId) {
        const foundColor = colorsMap.find(
          (x) => (x as any).categoryId === event.categoryId
        );
        if (foundColor) {
          coloredEvent.color = (themeValues as any)[foundColor.color];
        }
      }
      return coloredEvent;
    });
    setEvents(coloredEvents);
  }

  function onChange(list: any) {
    setCheckedList(list);
  }

  useEffect(() => {
    if (isSuccess) {
      findAllCalendarEvent();
    }
  }, [data]);

  return (
    <LayoutHOC>
      <div>
        <HeroSection />
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Row>
              <Form form={form} layout='inline' className='flex w-full'>
                <Form.Item>
                  <Select placeholder='MONTH'>
                    <Select.Option value='MONTH'>MONTH</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select placeholder='2022'>
                    <Select.Option value='2022'>2022</Select.Option>
                  </Select>
                </Form.Item>
                <Col md={12} xs={12}>
                  <Form.Item>
                    <CheckboxGroup onChange={onChange}>
                      <Row gutter={[0, 3]}>
                        <Col
                          span={10}
                          className='bg-yellow-400 p-1 rounded-md m-1 ml-5 text-center'
                        >
                          <Checkbox value='EVENT' className=''>
                            EVENT
                          </Checkbox>
                        </Col>
                        <Col
                          span={10}
                          className='bg-blue-400 p-1 rounded-md m-1  ml-5 text-center'
                        >
                          <Checkbox value='BIRTHDAY'>BIRTHDAY</Checkbox>
                        </Col>
                        <Col
                          span={10}
                          className='bg-red-400 p-1 rounded-md m-1  ml-5 text-center'
                        >
                          <Checkbox value='HOLIDAY'>HOLIDAY</Checkbox>
                        </Col>
                        <Col
                          span={10}
                          className='bg-green-400 p-1 rounded-md m-1  ml-5 text-center'
                        >
                          <Checkbox value='OTHER'>OTHER</Checkbox>
                        </Col>
                      </Row>
                    </CheckboxGroup>
                  </Form.Item>
                </Col>
              </Form>
            </Row>
          </Col>
          <Col span={24}>
            <CalendarComponent events={events} />
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CalendarPage;
