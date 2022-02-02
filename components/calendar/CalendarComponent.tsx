import React, { ReactElement, useRef } from 'react';
// Calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { FULL_CANLENDAR_LICENSE } from '../../config';

interface Props {
  events: any[]
}

function CalendarComponent({events}:Props): ReactElement {
  const calendarRef = useRef<any>(null);

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
        ]}
        headerToolbar={false}
        initialView='dayGridMonth'
        themeSystem='bootstrap'
        editable
        selectable
        selectMirror
        dayMaxEvents
        events={events}
        weekends
        locale={'th'}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
        }}
      />
    </div>
  );
}

export default CalendarComponent;
