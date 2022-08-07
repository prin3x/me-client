import { Col, List, Row } from "antd";
import axios from "axios";
import moment from "moment";
import React, { ReactElement, useEffect, useState } from "react";
import HolidaysHero from "../../components/holidays/HolidaysHero";
import LayoutHOC from "../../layout/LayoutHOC";
import { _getHolidays } from "../../services/calendar/calendar.service";

export interface HolidaysData {
  HolidayWeekDay: string;
  HolidayWeekDayThai: string;
  Date: string;
  DateThai: string;
  HolidayDescription: string;
  HolidayDescriptionThai: string;
}

export interface HolidaysResponseTimestamps {
  api: string;
  timestamp: string;
  data: HolidaysData[];
}

export interface HolidaysResponseFromBOT {
  result: HolidaysResponseTimestamps;
}

const dayMappingColor = {
  Saturday: "#9d33e2",
  Monday: "#ebc703",
  Tuesday: "#f879c8",
  Wednesday: "#31a853",
  Thursday: "#eb9860",
  Friday: "#4285f5",
  Sunday: "red",
};

function groupHolidays(_holidays) {
  let result = [];
  let data = _holidays;
  let prevMonthShort = "Dec";
  let newMonthShort = "Jan";
  let addedHoliday = [];
  let addedMonth;

  if (!data.length) return result;

  for (const holiday of data) {
    newMonthShort = moment(holiday.start).format("MMM");

    if (prevMonthShort !== newMonthShort) {
      addedHoliday = [];
      addedMonth = {
        month: newMonthShort,
        holidays: addedHoliday,
      };

      result.push(addedMonth);
    }

    addedHoliday.push({
      day: moment(holiday.start).format('dddd'),
      date: moment(holiday.start).format("DD"),
      event: holiday.title,
    });

    prevMonthShort = newMonthShort;
  }

  return result;
}

function HolidaysPage(): ReactElement {
  const [holidayData, setHolidayData] =
    useState([]);

  const [groupedHolidays, setGroupedHolidays] = useState([]);

  async function getHolidays() {
    try {
      let data: any = await _getHolidays()
      setHolidayData(data.items);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setGroupedHolidays(groupHolidays(holidayData));
  }, [holidayData]);

  useEffect(() => {
    getHolidays();
  },[])

  return (
    <LayoutHOC>
      <div>
        <HolidaysHero />
        <Row className="container mx-auto pt-10 w-full">
          <List
            className="p-5 w-full"
            dataSource={groupedHolidays}
            renderItem={(_holiday, i) => (
              <List.Item key={_holiday.id}>
                <Row className="w-full" align="middle">
                  <Col span={4}>
                    <div className="font-bold text-center text-primary-color">
                      {_holiday.month.toUpperCase()}
                    </div>
                  </Col>
                  <Col span={20} className="w-full">
                    {_holiday.holidays.map((hol) => (
                      <Row
                        key={hol.id}
                        justify="space-between"
                        className="w-full items-center"
                      >
                        <Col span={4} className='flex items-center'>
                          <div className="flex justify-start items-center gap-1">
                            <svg height="20" width="20">
                              <circle
                                cx="10"
                                cy="10"
                                r="5"
                                fill={dayMappingColor[hol.day]}
                              />
                            </svg>
                            <div style={{ color: dayMappingColor[hol.day] }}>
                              {hol.day}
                            </div>
                          </div>
                        </Col>
                        <Col span={4}>
                          <Row justify="center">{+hol.date}</Row>
                        </Col>
                        <Col span={12}>{hol.event}</Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default HolidaysPage;
