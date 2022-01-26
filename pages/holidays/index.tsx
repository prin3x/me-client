import { Col, List, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { ReactElement, useEffect, useState } from 'react';
import HolidaysHero from '../../components/holidays/HolidaysHero';
import LayoutHOC from '../../layout/LayoutHOC';

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
    api: 'API_V2.FIHolidays',
    timestamp: '2021-12-10 20:10:11',
    data: [
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-01-01',
        DateThai: '01/01/2564',
        HolidayDescription: 'New Year’s Day',
        HolidayDescriptionThai: 'วันขึ้นปีใหม่',
      },
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-02-12',
        DateThai: '12/02/2564',
        HolidayDescription: 'Additional special holiday (added)',
        HolidayDescriptionThai: 'วันหยุดพิเศษ (เพิ่มเติม)',
      },
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-02-26',
        DateThai: '26/02/2564',
        HolidayDescription: 'Makha Bucha Day',
        HolidayDescriptionThai: 'วันมาฆบูชา',
      },
      {
        HolidayWeekDay: 'Tuesday',
        HolidayWeekDayThai: 'วันอังคาร',
        Date: '2021-04-06',
        DateThai: '06/04/2564',
        HolidayDescription: 'Chakri Memorial Day',
        HolidayDescriptionThai:
          'วันพระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช\r\nและวันที่ระลึกมหาจักรีบรมราชวงศ์',
      },
      {
        HolidayWeekDay: 'Tuesday',
        HolidayWeekDayThai: 'วันอังคาร',
        Date: '2021-04-13',
        DateThai: '13/04/2564',
        HolidayDescription: 'Songkran Festival',
        HolidayDescriptionThai: 'วันสงกรานต์',
      },
      {
        HolidayWeekDay: 'Wednesday',
        HolidayWeekDayThai: 'วันพุธ',
        Date: '2021-04-14',
        DateThai: '14/04/2564',
        HolidayDescription: 'Songkran Festival',
        HolidayDescriptionThai: 'วันสงกรานต์',
      },
      {
        HolidayWeekDay: 'Thursday',
        HolidayWeekDayThai: 'วันพฤหัสบดี',
        Date: '2021-04-15',
        DateThai: '15/04/2564',
        HolidayDescription: 'Songkran Festival',
        HolidayDescriptionThai: 'วันสงกรานต์',
      },
      {
        HolidayWeekDay: 'Monday',
        HolidayWeekDayThai: 'วันจันทร์',
        Date: '2021-05-03',
        DateThai: '03/05/2564',
        HolidayDescription:
          'Substitution for National Labour Day\r\n(Saturday 1st May 2021)',
        HolidayDescriptionThai:
          'ชดเชยวันแรงงานแห่งชาติ\r\n(วันเสาร์ที่ 1 พฤษภาคม 2564)',
      },
      {
        HolidayWeekDay: 'Tuesday',
        HolidayWeekDayThai: 'วันอังคาร',
        Date: '2021-05-04',
        DateThai: '04/05/2564',
        HolidayDescription: 'Coronation Day',
        HolidayDescriptionThai: 'วันฉัตรมงคล',
      },
      {
        HolidayWeekDay: 'Wednesday',
        HolidayWeekDayThai: 'วันพุธ',
        Date: '2021-05-26',
        DateThai: '26/05/2564',
        HolidayDescription: 'Wisakha Bucha Day',
        HolidayDescriptionThai: 'วันวิสาขบูชา',
      },
      {
        HolidayWeekDay: 'Thursday',
        HolidayWeekDayThai: 'วันพฤหัสบดี',
        Date: '2021-06-03',
        DateThai: '03/06/2564',
        HolidayDescription:
          'H.M. Queen Suthida Bajrasudhabimalalakshana’s Birthday',
        HolidayDescriptionThai:
          'วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าสุทิดา\r\nพัชรสุธาพิมลลักษณ พระบรมราชินี',
      },
      {
        HolidayWeekDay: 'Monday',
        HolidayWeekDayThai: 'วันจันทร์',
        Date: '2021-07-26',
        DateThai: '26/07/2564',
        HolidayDescription:
          'Substitution for Asarnha Bucha Day\r\n(Saturday 24th July 2021)',
        HolidayDescriptionThai:
          'ชดเชยวันอาสาฬหบูชา\r\n(วันเสาร์ที่ 24 กรกฎาคม 2564)',
      },
      {
        HolidayWeekDay: 'Wednesday',
        HolidayWeekDayThai: 'วันพุธ',
        Date: '2021-07-28',
        DateThai: '28/07/2564',
        HolidayDescription:
          'H.M. King Maha Vajiralongkorn Phra Vajiraklaochaoyuhua’s Birthday',
        HolidayDescriptionThai:
          'วันเฉลิมพระชนมพรรษา\r\nพระบาทสมเด็จพระเจ้าอยู่หัว',
      },
      {
        HolidayWeekDay: 'Thursday',
        HolidayWeekDayThai: 'วันพฤหัสบดี',
        Date: '2021-08-12',
        DateThai: '12/08/2564',
        HolidayDescription:
          'H.M. Queen Sirikit The Queen Mother’s Birthday / Mother’s Day',
        HolidayDescriptionThai:
          'วันเฉลิมพระชนมพรรษา\r\nสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ\r\nพระบรมราชชนนีพันปีหลวง และวันแม่แห่งชาติ',
      },
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-09-24',
        DateThai: '24/09/2564',
        HolidayDescription: 'Additional special holiday (added)',
        HolidayDescriptionThai: 'วันหยุดพิเศษ (เพิ่มเติม)',
      },
      {
        HolidayWeekDay: 'Wednesday',
        HolidayWeekDayThai: 'วันพุธ',
        Date: '2021-10-13',
        DateThai: '13/10/2564',
        HolidayDescription:
          'H.M. King Bhumibol Adulyadej The Great Memorial Day',
        HolidayDescriptionThai:
          'วันคล้ายวันสวรรคต\r\nพระบาทสมเด็จพระบรมชนกาธิเบศร\r\nมหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร',
      },
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-10-22',
        DateThai: '22/10/2564',
        HolidayDescription:
          'Substitution for Chulalongkorn Day\r\n(Saturday 23rd October 2021)',
        HolidayDescriptionThai:
          'ชดเชยวันปิยมหาราช\r\n(วันเสาร์ที่ 23 ตุลาคม 2564)',
      },
      {
        HolidayWeekDay: 'Monday',
        HolidayWeekDayThai: 'วันจันทร์',
        Date: '2021-12-06',
        DateThai: '06/12/2564',
        HolidayDescription:
          'Substitution for H.M. King Bhumibol Adulyadej\r\nThe Great’s Birthday/ National Day / Father’s Day\r\n(Sunday 5th December 2021)',
        HolidayDescriptionThai:
          'ชดเชยวันคล้ายวันพระบรมราชสมภพของ\r\nพระบาทสมเด็จพระบรมชนกาธิเบศร\r\nมหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร\r\nวันชาติ และวันพ่อแห่งชาติ\r\n(วันอาทิตย์ที่ 5 ธันวาคม 2564)',
      },
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-12-10',
        DateThai: '10/12/2564',
        HolidayDescription: 'Constitution Day',
        HolidayDescriptionThai: 'วันรัฐธรรมนูญ',
      },
      {
        HolidayWeekDay: 'Friday',
        HolidayWeekDayThai: 'วันศุกร์',
        Date: '2021-12-31',
        DateThai: '31/12/2564',
        HolidayDescription: "New Year's Eve",
        HolidayDescriptionThai: 'วันสิ้นปี',
      },
    ],
  },
};

const dayMappingColor = {
  Saturday: '#9d33e2',
  Monday: '#ebc703',
  Tuesday: '#f879c8',
  Wednesday: '#31a853',
  Thursday: '#eb9860',
  Friday: '#4285f5',
  Sunday: 'red',
};

function groupHolidays(_holidays: HolidaysResponseFromBOT) {
  let result = [];
  let data = _holidays?.result?.data || [];
  let prevMonthShort = 'Jan';
  let newMonthShort = 'Jan';
  let addedHoliday = [];
  let addedMonth;

  if (!data.length) return result;

  for (const holiday of data) {
    newMonthShort = moment(holiday.Date).format('MMM');

    if (prevMonthShort !== newMonthShort) {
      addedHoliday = [];
      addedMonth = {
        month: newMonthShort,
        holidays: addedHoliday,
      };

      result.push(addedMonth)
    }

    addedHoliday.push({
      day: holiday.HolidayWeekDay,
      date: moment(holiday.Date).format('DD'),
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
    method: 'GET',
    url: 'https://apigw1.bot.or.th/bot/public/financial-institutions-holidays/',
    qs: { year: '2022' },
    headers: {
      'X-IBM-Client-Id': '7d6e043b-6f69-4026-8279-7be69d2d3399',
      accept: 'application/json',
    },
  };

  async function getHolidays() {
    console.log('asifhasi', 'data');
    try {
      let data: any = await axios({ ...options });
      setHolidayData(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setGroupedHolidays(groupHolidays(mockHolidays));
  }, []);

  return (
    <LayoutHOC>
      <div>
        <HolidaysHero />
        <Row className='container mx-auto pt-10 w-full'>
          <List
            className='p-5 w-full'
            dataSource={groupedHolidays}
            renderItem={(_holiday, i) => (
              <List.Item key={_holiday.month}>
                <Row className='w-full' align='middle'>
                  <Col span={4}>
                    <div className='font-bold text-center text-primary-color'>
                      {_holiday.month.toUpperCase()}
                    </div>
                  </Col>
                  <Col span={20} className='w-full'>
                    {_holiday.holidays.map((hol) => (
                      <Row
                        key={hol.event}
                        justify='space-between'
                        className='w-full'
                      >
                        <Col span={4}>
                          <div className='flex justify-start items-center gap-1'>
                            <svg height='20' width='20'>
                              <circle
                                cx='10'
                                cy='10'
                                r='5'
                                fill={dayMappingColor[hol.day]}
                              />
                            </svg>
                            <div style={{ color: dayMappingColor[hol.day] }}>
                              {hol.day}
                            </div>
                          </div>
                        </Col>
                        <Col span={4}>
                          <Row justify='center'>
                          {+hol.date}
                          </Row>
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
