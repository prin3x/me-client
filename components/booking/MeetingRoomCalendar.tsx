import React, { ReactElement, useEffect, useRef, useState } from 'react';
// Calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'; // a plugin!
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import moment from 'moment';
import { _getAllRooms } from '../../services/meetingRoom/meeting-room.service';
import { message } from 'antd';
import { FULL_CANLENDAR_LICENSE } from '../../config';

function MeetingRoomCalendar({ rooms,selectDate, meetingEventsQuery }): ReactElement {
  const calendarRef = useRef<any>(null);
  const { data, isLoading, isSuccess } = meetingEventsQuery;
  const [events, setEvents] = useState([]);


  const getToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
    }
  };

  const getToSelectDay = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectDate);
    }
  }

  useEffect(() => {
    getToday();
  }, []);

  useEffect(() => {
    getToSelectDay()
  },[selectDate])

  async function findAllCalendarEvent() {
    if (!data) return;
    const coloredEvents = data?.data?.map((event) => {
      const coloredEvent = { ...event };
      if (event.roomId) {
        coloredEvent.start = moment(event.start).format('YYYY-MM-DD hh:mm:ss');
        coloredEvent.end = moment(event.end).format('YYYY-MM-DD hh:mm:ss');
        coloredEvent.resourceIds = [event.roomId]
      }
      console.log(coloredEvent);
      return coloredEvent;
    });
    setEvents(coloredEvents);
  }


  useEffect(() => {
    findAllCalendarEvent();
  }, [data]);

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        schedulerLicenseKey={FULL_CANLENDAR_LICENSE}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrapPlugin,
          resourceTimelinePlugin,
          resourceTimeGridPlugin,
        ]}
        headerToolbar={false}
        initialView='resourceTimeGridDay'
        themeSystem='standard'
        resources={rooms}
        editable
        selectable
        selectMirror
        dayMaxEvents
        weekends
        locale={'th'}
        events={isSuccess ? events : []}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
        }}
      />
    </div>
  );
}

// {
//   id: '1',
//   resourceIds: ['a'],
//   title: 'Meeting',
//   start: '2022-01-28',
//   end: '2022-01-29',
// },

export default MeetingRoomCalendar;
