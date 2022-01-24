import { Checkbox, Col, Form, Row, Select } from 'antd';
import dynamic from 'next/dynamic';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import HeroSection from '../../components/calendar/HeroSection';
import LayoutHOC from '../../layout/LayoutHOC';
import { CALENDAR_EVENT } from '../../services/calendar/calendar.queryKey';
import { _findAllCalendarEvent } from '../../services/calendar/calendar.service';
import { useQuery } from 'react-query';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

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
  const [events, setEvents] = useState<any[]>([]);
  const calendarEventMeta = useQuery([CALENDAR_EVENT], _findAllCalendarEvent);

  function setEventState() {
    let nextState;
    nextState = findAllCalendarEvent();

    setEvents(nextState);
  }

  function findAllCalendarEvent() {
    const coloredEvents = calendarEventMeta?.data.map((event: any) => {
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

    return coloredEvents;
  }

  function filterEventType(_categoryIds: CheckboxValueType[]) {
    let nextState: any[] = [];
    let tempState = [];
    for (let i = 0; i < _categoryIds.length; i++) {
      tempState = findAllCalendarEvent()?.filter(
        (_event: any) => _event.categoryId === _categoryIds[i]
      );
      nextState = [...nextState, ...tempState];
    }
    
    setEvents(nextState);
  }

  useEffect(() => {
    if (calendarEventMeta.isSuccess) {
      setEventState();
    }
  }, [calendarEventMeta.data]);

  return (
    <LayoutHOC>
      <div className='calendar'>
        <HeroSection />
        <Row className='container mx-auto pt-10'>
          <Col lg={24}>
            <Row justify='space-between'>
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
                <Form.Item>
                  <CheckboxGroup onChange={filterEventType}>
                    <Row gutter={[0, 3]}>
                      <Col
                        lg={10}
                        className='bg-yellow-400 p-1 rounded-md m-1 ml-5 text-center'
                      >
                        <Checkbox value={2} className=''>
                          EVENT
                        </Checkbox>
                      </Col>
                      <Col
                        lg={10}
                        className='bg-blue-400 p-1 rounded-md m-1  ml-5 text-center'
                      >
                        <Checkbox value={3}>BIRTHDAY</Checkbox>
                      </Col>
                      <Col
                        lg={10}
                        className='bg-red-400 p-1 rounded-md m-1  ml-5 text-center'
                      >
                        <Checkbox value={4}>HOLIDAY</Checkbox>
                      </Col>
                      <Col
                        lg={10}
                        className='bg-green-400 p-1 rounded-md m-1  ml-5 text-center'
                      >
                        <Checkbox value={1}>OTHER</Checkbox>
                      </Col>
                    </Row>
                  </CheckboxGroup>
                </Form.Item>
              </Form>
            </Row>
          </Col>
          <Col lg={24}>
            <CalendarComponent events={events} />
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CalendarPage;
