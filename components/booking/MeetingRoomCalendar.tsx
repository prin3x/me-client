import React, { ReactElement, useEffect, useRef } from 'react';
// Calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'; // a plugin!
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

function MeetingRoomCalendar({selectDate}): ReactElement {
  const calendarRef = useRef<any>(null);

  const getToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectDate)
    }
  };

  useEffect(() => {
    getToday()
  },[])

  return (
    <div>
      <FullCalendar
          ref={calendarRef}
          schedulerLicenseKey='0261586002-fcs-1640591838'
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
          resources={[
            {
              id: 'a',
              title: 'Floor 3 : Room A',
            },
            {
              id: 'b',
              title: 'Floor 3 : Room B',
            },
            {
              id: 'c',
              title: 'Floor 3 : Room C',
            },
          ]}
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends
          locale={'th'}
          events={[
            {
              id: '1',
              resourceIds: ['a'],
              title: 'Meeting',
              start: '2022-01-03',
              end: '2022-01-04',
            },
          ]}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
          }}
        />
    </div>
  );
}

export default MeetingRoomCalendar;
