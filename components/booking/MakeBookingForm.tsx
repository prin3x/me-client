import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { EMakeStatus } from "../../services/meetingRoom/meeting-room.model";

const availableHours = [
  { label: "07", value: 7 },
  { label: "08", value: 8 },
  { label: "09", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
  { label: "14", value: 14 },
  { label: "15", value: 15 },
  { label: "16", value: 16 },
  { label: "17", value: 17 },
  { label: "18", value: 18 },
  { label: "19", value: 19 },
];
const availableMinutes = [
  { label: "30 minute", value: 30 },
  { label: "00 minute", value: 0 },
];
const availableDutaion = [
  { label: "30 minutes", value: 30 },
  { label: "1 hour", value: 60 },
  { label: "2 hours", value: 120 },
  { label: "3 hours", value: 180 },
  { label: "4 hours", value: 240 },
];

type Props = {
  submitRoomBooking: () => void;
  updateRoomBooking: () => Promise<void>;
  removeRoomBooking: () => Promise<void>;
  makeStatus: EMakeStatus;
  roomsMeta: any;
  form: any;
};

function MakeBookingForm({
  submitRoomBooking,
  updateRoomBooking,
  removeRoomBooking,
  roomsMeta,
  form,
  makeStatus,
}: Props) {
  const router = useRouter();
  const [startDate, setStartDate] = useState(moment());
  const [isCheckedAllDay, setIsCheckedAllDay] = useState(false);
  const [filteredAvailableHours, setFilteredAvailableHours] =
    useState(availableHours);

  function defaultDisabledDate(current) {
    return current < moment().subtract(23, "h");
  }

  function disabledStartDate(current) {
    return current < startDate;
  }

  function onCheck(e) {
    setIsCheckedAllDay(e.target.checked);
    form.setFieldsValue({ allDay: e.target.checked });
  }

  function onSelectStartDate(_values) {
    setStartDate(_values);
    form.setFieldsValue({ end: moment(_values).add(1, "h") });
  }

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  // function disabledDateTime() {
  //   return {
  //     disabledHours: () => {
  //       const hours = range(0, 24);
  //       hours.splice(7, 19);
  //       return hours;
  //     },
  //     disabledMinutes: () => {
  //       const minutes = range(0, 60);
  //       minutes.splice(0, 29);
  //       minutes.splice(31, 59);
  //       return minutes;
  //     },
  //     disabledSeconds: () => {
  //       const minutes = range(0, 60);
  //       minutes.splice(0, 29);
  //       minutes.splice(31, 59);
  //       return minutes;
  //     },
  //   };
  // }

  useEffect(() => {
    form.setFieldsValue({ roomId: roomsMeta?.data?.[0]?.id, allDay: false });
    if (router.query.date) {
      form.setFieldsValue({ date: moment(router.query.date) });
    }
  }, [roomsMeta, router]);

  return (
    <Row justify="center" className="w-full meeting-room">
      <Row justify="center" className="w-full mt-10">
        <Col>
          <div className="uppercase text-primary-color text-2xl font-bold">
            Booking Room
          </div>
        </Col>
      </Row>
      <Row justify="start" className=" mt-5 w-full">
        <Form onFinish={submitRoomBooking} form={form} colon={false}>
          <Form.Item
            className="font-bold"
            name="title"
            label="Name Meeting"
            rules={[{ required: true }]}
          >
            <Input
              size="large"
              style={{ width: 600 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          <Form.Item
            className="font-bold pad-left-form-label"
            name="description"
            label="Description"
          >
            <Input.TextArea
              rows={4}
              size="large"
              style={{ width: 600 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          <Form.Item
            className="font-bold"
            name="date"
            label="Date"
            rules={[{ required: true }]}
          >
            <DatePicker disabledDate={defaultDisabledDate} />
          </Form.Item>
          <Form.Item
            className="font-bold"
            name="startHour"
            label="Start Hour"
            rules={[{ required: true }]}
            initialValue={filteredAvailableHours[0].value}
          >
            <Select style={{ width: 300 }}>
              {availableHours.map((el) => (
                <Select.Option key={el.label} value={el.value}>
                  {el.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Row>
            <Form.Item
              className="font-bold"
              name="startMinute"
              label="Minute"
              rules={[{ required: true }]}
              initialValue={availableMinutes[0].value}
            >
              <Select style={{ width: 300 }}>
                {availableMinutes.map((el) => (
                  <Select.Option key={el.label} value={el.value}>
                    {el.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="allDay">
              <Checkbox onChange={onCheck} style={{ marginLeft: 24 }}>
                All day
              </Checkbox>
            </Form.Item>
          </Row>
          <Form.Item
            className="font-bold"
            label="Duration"
            name="endHour"
            rules={[{ required: true }]}
            initialValue={availableDutaion[0].value}
          >
            <Select disabled={isCheckedAllDay}>
              {availableDutaion.map((el) => (
                <Select.Option key={el.label} value={el.value}>
                  {el.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* <Form.Item
          className="font-bold" name="end" label="End" rules={[{ required: true }]}>
            <DatePicker
              size="large"
              value={moment(router.query.date)}
              disabledDate={disabledStartDate}
              showTime={{
                ...disabledDateTime,
                format: "HH:mm",
                minuteStep: 30,
                hideDisabledOptions: true,
              }}
              style={{ width: 500 }}
              disabled={makeStatus === EMakeStatus.READ || isCheckedAllDay}
            />
          </Form.Item> */}
          {/* <Form.Item
          className="font-bold" label="Area">
            <Select
              defaultValue={"4"}
              style={{ width: 600 }} disabled={makeStatus === EMakeStatus.READ} 
              className="selector-w-10"
            >
              <Select.Option value="4">Floor 4th</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
          className="font-bold" label="Type">
            <Select
              defaultValue={"4"}
              style={{ width: 600 }} disabled={makeStatus === EMakeStatus.READ} 
              className="selector-w-10"
            >
              <Select.Option value="4">Floor 4th</Select.Option>
            </Select>
          </Form.Item> */}
          <Form.Item
            className="font-bold"
            name="roomId"
            label="Rooms"
            rules={[{ required: true }]}
          >
            <Select
              size="large"
              style={{ width: 600 }}
              disabled={makeStatus === EMakeStatus.READ}
            >
              {Array.isArray(roomsMeta?.data) &&
                roomsMeta?.data?.map((_room) => (
                  <Select.Option key={_room.id} value={_room.id}>
                    {_room.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            className="font-bold"
            name="type"
            label="Type"
            rules={[{ required: true }]}
            initialValue="internal"
          >
            <Select
              size="large"
              style={{ width: 600 }}
              disabled={makeStatus === EMakeStatus.READ}
            >
              <Select.Option value="internal">Internal</Select.Option>
              <Select.Option value="external">External</Select.Option>
            </Select>
          </Form.Item>
          <Row className="mt-10" justify="center">
            {makeStatus === EMakeStatus.MAKE ? (
              <Col>
                <Form.Item>
                  <Button
                    size="large"
                    htmlType="submit"
                    className="rounded-btn ml-6"
                    type="primary"
                  >
                    Save Booking
                  </Button>
                </Form.Item>
              </Col>
            ) : makeStatus === EMakeStatus.EDIT ? (
              <>
                <Col>
                  <Form.Item>
                    <Button
                      size="large"
                      onClick={updateRoomBooking}
                      className="secondary-btn rounded-btn"
                    >
                      Edit
                    </Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button
                      size="large"
                      onClick={removeRoomBooking}
                      className="rounded-btn ml-6"
                      danger
                      type="primary"
                    >
                      Delete
                    </Button>
                  </Form.Item>
                </Col>
              </>
            ) : null}
          </Row>
        </Form>
      </Row>
    </Row>
  );
}

export default MakeBookingForm;
