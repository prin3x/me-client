import dynamic from "next/dynamic";
import React, { ReactElement } from "react";
import HeroSection from "../../components/calendar/HeroSection";
import LayoutHOC from "../../layout/LayoutHOC";
import { _findAllCalendarEvent } from "../../services/calendar/calendar.service";

const CalendarComponent = dynamic(
  () => import("../../components/calendar/CalendarComponent"),
  {
    ssr: false,
  }
);

function CalendarPage(): ReactElement {
  return (
    <LayoutHOC>
      <div className="calendar">
        <HeroSection />
        <CalendarComponent />
      </div>
    </LayoutHOC>
  );
}

export default CalendarPage;
