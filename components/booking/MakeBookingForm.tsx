import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import {
  EMakeStatus,
  ICreateMeeting,
} from "../../services/meetingRoom/meeting-room.model";

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

  function disabledDateTime() {
    return {
      disabledHours: () => {
        const hours = range(0, 24);
        hours.splice(7, 20);
        return hours;
      },
      disabledMinutes: () => {
        const minutes = range(0, 60);
        minutes.splice(0, 29);
        minutes.splice(31, 59);
        return minutes;
      },
      disabledSeconds: () => {
        const minutes = range(0, 60);
        minutes.splice(0, 29);
        minutes.splice(31, 59);
        return minutes;
      },
    };
  }

  useEffect(() => {
    form.setFieldsValue({ roomId: roomsMeta?.data?.[0]?.id, allDay: false });
  }, [roomsMeta]);

  return (
    <Row justify="center" className="w-full meeting-room">
      <Row justify="center" className="w-full mt-10">
        <Col>
          <div className="uppercase text-primary-color text-xl font-bold">
            Booking Room
          </div>
        </Col>
      </Row>
      <Row justify="start" className=" mt-5 w-full">
        <Form onFinish={submitRoomBooking} form={form} colon={false}>
          <Form.Item
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
          <Form.Item name="description" label="Description">
            <Input.TextArea
              rows={4}
              size="large"
              style={{ width: 600 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          <Row>
            <Form.Item name="start" label="Start" rules={[{ required: true }]}>
              <DatePicker
                size="large"
                disabledDate={defaultDisabledDate}
                onChange={onSelectStartDate}
                showTime={{
                  format: "HH:mm",
                  minuteStep: 30,
                  disabledHours: () => {
                    const hours = range(0, 24);
                    hours.splice(7, 20);
                    return hours;
                  },
                  hideDisabledOptions: true,
                }}
                style={{ width: 500 }}
                disabled={makeStatus === EMakeStatus.READ}
              />
            </Form.Item>
            <Form.Item name="allDay">
              <Checkbox onChange={onCheck} style={{ marginLeft: 24 }}>
                All day
              </Checkbox>
            </Form.Item>
          </Row>
          <Form.Item name="end" label="End" rules={[{ required: true }]}>
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
          </Form.Item>
          {/* <Form.Item label="Area">
            <Select
              defaultValue={"4"}
              style={{ width: 600 }} disabled={makeStatus === EMakeStatus.READ} 
              className="selector-w-10"
            >
              <Select.Option value="4">Floor 4th</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Type">
            <Select
              defaultValue={"4"}
              style={{ width: 600 }} disabled={makeStatus === EMakeStatus.READ} 
              className="selector-w-10"
            >
              <Select.Option value="4">Floor 4th</Select.Option>
            </Select>
          </Form.Item> */}
          <Form.Item name="roomId" label="Rooms" rules={[{ required: true }]}>
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
