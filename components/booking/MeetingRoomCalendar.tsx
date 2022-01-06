import React, { ReactElement, useRef } from 'react';
// Calendar
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
interface Props {}

function MeetingRoomCalendar({}: Props): ReactElement {
  const calendarRef = useRef<any>(null);
  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrapPlugin,
          resourceTimeGridPlugin
        ]}
        headerToolbar={false}
        initialView='timeGrid'
        editable
        selectable
        selectMirror
        dayMaxEvents
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

export default MeetingRoomCalendar;
