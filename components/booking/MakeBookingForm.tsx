import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  EMakeStatus,
  ICreateMeeting,
} from "../../services/meetingRoom/meeting-room.model";

type Props = {
  submitRoomBooking: (_formValues: ICreateMeeting) => Promise<void>;
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

  function defaultDisabledDate(current) {
    return current < moment().subtract(23, "h");
  }

  function disabledStartDate(current) {
    return current < startDate;
  }

  // useEffect(() => {
  //   form.setFieldsValue({ end: startDate.add(30, "m") });
  // }, [startDate]);

  useEffect(() => {
    form.setFieldsValue({ roomId: roomsMeta?.data?.[0]?.id });
  }, [roomsMeta]);

  return (
    <Row justify="center" className="w-full">
      <Row justify="center" className="w-full mt-10">
        <Col>
          <div className="uppercase text-primary-color text-xl font-bold">
            Booking Room
          </div>
        </Col>
      </Row>
      <Row justify="center" className=" mt-5 w-full">
        <Form
          onFinish={submitRoomBooking}
          form={form}
          colon={false}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item name="title" label="Name Meeting">
            <Input
              style={{ width: 200 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input
              style={{ width: 200 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          <Form.Item name="start" label="Start">
            <DatePicker
              value={moment(router.query.date)}
              disabledDate={defaultDisabledDate}
              onChange={(_date) => setStartDate(_date)}
              showTime={{
                format: "HH:mm",
                disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 21, 22, 23, 24],
                hideDisabledOptions: true,
              }}
              style={{ width: 200 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          <Form.Item name="end" label="End">
            <DatePicker
              value={moment(router.query.date)}
              disabledDate={disabledStartDate}
              showTime={{
                format: "HH:mm",
                disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 21, 22, 23, 24],
                hideDisabledOptions: true,
              }}
              style={{ width: 200 }}
              disabled={makeStatus === EMakeStatus.READ}
            />
          </Form.Item>
          {/* <Form.Item label="Area">
            <Select
              defaultValue={"4"}
              style={{ width: 200 }} disabled={makeStatus === EMakeStatus.READ} 
              className="selector-w-10"
            >
              <Select.Option value="4">Floor 4th</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Type">
            <Select
              defaultValue={"4"}
              style={{ width: 200 }} disabled={makeStatus === EMakeStatus.READ} 
              className="selector-w-10"
            >
              <Select.Option value="4">Floor 4th</Select.Option>
            </Select>
          </Form.Item> */}
          <Form.Item name="roomId" label="Room">
            <Select
              style={{ width: 200 }}
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
          <Row className="mt-10">
            {makeStatus === EMakeStatus.MAKE ? (
              <Col offset={8}>
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
                <Col offset={8}>
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
