import { Col, List, Row } from "antd";
import axios from "axios";
import moment from "moment";
import React, { ReactElement, useEffect, useState } from "react";
import HolidaysHero from "../../components/holidays/HolidaysHero";
import LayoutHOC from "../../layout/LayoutHOC";

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

const mockHolidays: HolidaysResponseFromBOT = {
  result: {
    api: "API_V2.FIHolidays",
    timestamp: "2022-02-10 17:12:52",
    data: [
      {
        HolidayWeekDay: "Monday",
        HolidayWeekDayThai: "วันจันทร์",
        Date: "2022-01-03",
        DateThai: "03/01/2565",
        HolidayDescription:
          "Substitution for New Year's Day\r\n(Saturday 1st January 2022)",
        HolidayDescriptionThai:
          "ชดเชยวันขึ้นปีใหม่\r\n(วันเสาร์ที่ 1 มกราคม 2565)",
      },
      {
        HolidayWeekDay: "Wednesday",
        HolidayWeekDayThai: "วันพุธ",
        Date: "2022-02-16",
        DateThai: "16/02/2565",
        HolidayDescription: "Makha Bucha Day",
        HolidayDescriptionThai: "วันมาฆบูชา",
      },
      {
        HolidayWeekDay: "Wednesday",
        HolidayWeekDayThai: "วันพุธ",
        Date: "2022-04-06",
        DateThai: "06/04/2565",
        HolidayDescription: "Chakri Memorial Day",
        HolidayDescriptionThai:
          "วันพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช\r\nและวันที่ระลึกมหาจักรีบรมราชวงศ์",
      },
      {
        HolidayWeekDay: "Wednesday",
        HolidayWeekDayThai: "วันพุธ",
        Date: "2022-04-13",
        DateThai: "13/04/2565",
        HolidayDescription: "Songkran Festival",
        HolidayDescriptionThai: "วันสงกรานต์",
      },
      {
        HolidayWeekDay: "Thursday",
        HolidayWeekDayThai: "วันพฤหัสบดี",
        Date: "2022-04-14",
        DateThai: "14/04/2565",
        HolidayDescription: "Songkran Festival",
        HolidayDescriptionThai: "วันสงกรานต์",
      },
      {
        HolidayWeekDay: "Friday",
        HolidayWeekDayThai: "วันศุกร์",
        Date: "2022-04-15",
        DateThai: "15/04/2565",
        HolidayDescription: "Songkran Festival",
        HolidayDescriptionThai: "วันสงกรานต์",
      },
      {
        HolidayWeekDay: "Monday",
        HolidayWeekDayThai: "วันจันทร์",
        Date: "2022-05-02",
        DateThai: "02/05/2565",
        HolidayDescription:
          "Substitution for National Labour Day\r\n(Sunday 1st May 2022)",
        HolidayDescriptionThai:
          "ชดเชยวันแรงงานแห่งชาติ\r\n(วันอาทิตย์ที่ 1 พฤษภาคม 2565)",
      },
      {
        HolidayWeekDay: "Wednesday",
        HolidayWeekDayThai: "วันพุธ",
        Date: "2022-05-04",
        DateThai: "04/05/2565",
        HolidayDescription: "Coronation Day",
        HolidayDescriptionThai: "วันฉัตรมงคล",
      },
      {
        HolidayWeekDay: "Monday",
        HolidayWeekDayThai: "วันจันทร์",
        Date: "2022-05-16",
        DateThai: "16/05/2565",
        HolidayDescription:
          "Substitution for Wisakha Bucha Day\r\n(Sunday 15th May 2022)",
        HolidayDescriptionThai:
          "ชดเชยวันวิสาขบูชา\r\n(วันอาทิตย์ที่ 15 พฤษภาคม 2565)",
      },
      {
        HolidayWeekDay: "Friday",
        HolidayWeekDayThai: "วันศุกร์",
        Date: "2022-06-03",
        DateThai: "03/06/2565",
        HolidayDescription:
          "H.M. Queen Suthida Bajrasudhabimalalakshana’s Birthday",
        HolidayDescriptionThai:
          "วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสุทิดา\r\nพัชรสุธาพิมลลักษณ พระบรมราชินี",
      },
      {
        HolidayWeekDay: "Wednesday",
        HolidayWeekDayThai: "วันพุธ",
        Date: "2022-07-13",
        DateThai: "13/07/2565",
        HolidayDescription: "Asarnha Bucha Day",
        HolidayDescriptionThai: "วันอาสาฬหบูชา",
      },
      {
        HolidayWeekDay: "Thursday",
        HolidayWeekDayThai: "วันพฤหัสบดี",
        Date: "2022-07-28",
        DateThai: "28/07/2565",
        HolidayDescription:
          "H.M. King Maha Vajiralongkorn Phra Vajiraklaochaoyuhua’s Birthday",
        HolidayDescriptionThai:
          "วันเฉลิมพระชนมพรรษา\r\nพระบาทสมเด็จพระเจ้าอยู่หัว",
      },
      {
        HolidayWeekDay: "Friday",
        HolidayWeekDayThai: "วันศุกร์",
        Date: "2022-07-29",
        DateThai: "29/07/2565",
        HolidayDescription: "Additional special holiday (added)",
        HolidayDescriptionThai: "วันหยุดพิเศษ (เพิ่มเติม)",
      },
      {
        HolidayWeekDay: "Friday",
        HolidayWeekDayThai: "วันศุกร์",
        Date: "2022-08-12",
        DateThai: "12/08/2565",
        HolidayDescription:
          "H.M. Queen Sirikit The Queen Mother’s Birthday / Mother’s Day",
        HolidayDescriptionThai:
          "วันเฉลิมพระชนมพรรษา\r\nสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ\r\nพระบรมราชชนนีพันปีหลวง และวันแม่แห่งชาติ",
      },
      {
        HolidayWeekDay: "Thursday",
        HolidayWeekDayThai: "วันพฤหัสบดี",
        Date: "2022-10-13",
        DateThai: "13/10/2565",
        HolidayDescription:
          "H.M. King Bhumibol Adulyadej The Great Memorial Day",
        HolidayDescriptionThai:
          "วันคล้ายวันสวรรคต\r\nพระบาทสมเด็จพระบรมชนกาธิเบศร\r\nมหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
      },
      {
        HolidayWeekDay: "Friday",
        HolidayWeekDayThai: "วันศุกร์",
        Date: "2022-10-14",
        DateThai: "14/10/2565",
        HolidayDescription: "Additional special holiday (added)",
        HolidayDescriptionThai: "วันหยุดพิเศษ (เพิ่มเติม)",
      },
      {
        HolidayWeekDay: "Monday",
        HolidayWeekDayThai: "วันจันทร์",
        Date: "2022-10-24",
        DateThai: "24/10/2565",
        HolidayDescription:
          "Substitution for Chulalongkorn Day\r\n(Sunday 23rd October 2022)",
        HolidayDescriptionThai:
          "ชดเชยวันปิยมหาราช\r\n(วันอาทิตย์ที่ 23 ตุลาคม 2565)",
      },
      {
        HolidayWeekDay: "Monday",
        HolidayWeekDayThai: "วันจันทร์",
        Date: "2022-12-05",
        DateThai: "05/12/2565",
        HolidayDescription:
          "H.M. King Bhumibol Adulyadej\r\nThe Great’s Birthday/ National Day / Father’s Day",
        HolidayDescriptionThai:
          "วันคล้ายวันพระบรมราชสมภพของ\r\nพระบาทสมเด็จพระบรมชนกาธิเบศร\r\nมหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร\r\nวันชาติ และวันพ่อแห่งชาติ",
      },
      {
        HolidayWeekDay: "Monday",
        HolidayWeekDayThai: "วันจันทร์",
        Date: "2022-12-12",
        DateThai: "12/12/2565",
        HolidayDescription:
          "Substitution for Constitution Day\r\n(Saturday 10th December 2022)",
        HolidayDescriptionThai:
          "ชดเชยวันรัฐธรรมนูญ\r\n(วันเสาร์ที่ 10 ธันวาคม 2565)",
      },
    ],
  },
};

const dayMappingColor = {
  Saturday: "#9d33e2",
  Monday: "#ebc703",
  Tuesday: "#f879c8",
  Wednesday: "#31a853",
  Thursday: "#eb9860",
  Friday: "#4285f5",
  Sunday: "red",
};

function groupHolidays(_holidays: HolidaysResponseFromBOT) {
  let result = [];
  let data = _holidays?.result?.data || [];
  let prevMonthShort = "Dec";
  let newMonthShort = "Jan";
  let addedHoliday = [];
  let addedMonth;

  if (!data.length) return result;

  for (const holiday of data) {
    newMonthShort = moment(holiday.Date).format("MMM");

    if (prevMonthShort !== newMonthShort) {
      addedHoliday = [];
      addedMonth = {
        month: newMonthShort,
        holidays: addedHoliday,
      };

      result.push(addedMonth);
    }

    addedHoliday.push({
      day: holiday.HolidayWeekDay,
      date: moment(holiday.Date).format("DD"),
      event: holiday.HolidayDescription,
    });

    prevMonthShort = newMonthShort;
  }

  return result;
}

function HolidaysPage(): ReactElement {
  const [holidayData, setHolidayData] =
    useState<HolidaysResponseFromBOT>(mockHolidays);

  const [groupedHolidays, setGroupedHolidays] = useState([]);

  const options: any = {
    method: "GET",
    url: "https://apigw1.bot.or.th/bot/public/financial-institutions-holidays/",
    qs: { year: "2022" },
    headers: {
      "X-IBM-Client-Id": "7d6e043b-6f69-4026-8279-7be69d2d3399",
      accept: "application/json",
    },
  };

  async function getHolidays() {
    try {
      let data: any = await axios({ ...options });
      setHolidayData(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    // getHolidays();
    setGroupedHolidays(groupHolidays(mockHolidays));
  }, []);

  return (
    <LayoutHOC>
      <div>
        <HolidaysHero />
        <Row className="container mx-auto pt-10 w-full">
          <List
            className="p-5 w-full"
            dataSource={groupedHolidays}
            renderItem={(_holiday, i) => (
              <List.Item key={_holiday.month}>
                <Row className="w-full" align="middle">
                  <Col span={4}>
                    <div className="font-bold text-center text-primary-color">
                      {_holiday.month.toUpperCase()}
                    </div>
                  </Col>
                  <Col span={20} className="w-full">
                    {_holiday.holidays.map((hol) => (
                      <Row
                        key={hol.event}
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
