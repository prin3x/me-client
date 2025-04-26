import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Select,
  TimePicker,
} from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { _getAllFloors } from "../../services/floor/floor.service";
import { EMakeStatus } from "../../services/meetingRoom/meeting-room.model";
import { _getRoomByFloor } from "../../services/meetingRoom/meeting-room.service";

type Props = {
  submitRoomBooking: () => void;
  updateRoomBooking: () => Promise<void>;
  removeRoomBooking: () => Promise<void>;
  makeStatus: EMakeStatus;
  form: any;
};

function MakeBookingForm({
  submitRoomBooking,
  updateRoomBooking,
  removeRoomBooking,
  form,
  makeStatus,
}: Props) {
  const floorMetaData = useQuery(["available floors"], () => _getAllFloors());
  const [formValues, setFormValues] = useState<any>({});
  const [hourDiff, setHourDiff] = useState(0);
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState<string>("0");

  function defaultDisabledDate(current) {
    return current < moment().subtract(23, "h");
  }
  const onFieldChange = (_formValues) => setFormValues(_formValues);

  const getAllRooms = async (floor: string) => {
    let res;
    try {
      res = await _getRoomByFloor(floor);
      setRooms(res);
    } catch (e) {
      message.error("Cannot get rooms");
    }
  };

  function mergeDate(formValues) {
    const startTime =
      moment(formValues.startDate).format("YYYY-MM-DD") +
      " " +
      moment(formValues.startHour).format("HH:mm");
    const endTime =
      moment(formValues.endDate).format("YYYY-MM-DD") +
      " " +
      moment(formValues.endHour).format("HH:mm");

    const hourDiff = moment(endTime).diff(moment(startTime), "minutes") / 60;

    return isNaN(hourDiff) ? 0 : hourDiff;
  }

  const selectFloor = (_floor) => {
    setFloor(_floor);
    form.setFieldsValue({ room: undefined });
  };

  useEffect(() => {
    if (floor === "0") return setRooms([]);
    getAllRooms(floor);

    return () => setRooms([]);
  }, [floor]);

  useEffect(() => {
    if (formValues.endHour && formValues.endDate) {
      const hourDiff = mergeDate(formValues);

      setHourDiff(hourDiff);
    }

    return () => setHourDiff(0);
  }, [formValues]);

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
        <Form
          onFinish={submitRoomBooking}
          form={form}
          colon={false}
          onValuesChange={(_, form) => onFieldChange(form)}
        >
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
          <Row>
            <Form.Item
              className="font-bold  strict-error-form-item"
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: "Please input start date!" }]}
            >
              <DatePicker
                disabledDate={defaultDisabledDate}
                disabled={makeStatus === EMakeStatus.READ}
              />
            </Form.Item>
            <Form.Item
              className="font-bold"
              name="startHour"
              rules={[{ required: true, message: "Please input start time!" }]}
            >
              <TimePicker
                minuteStep={30}
                format="HH:mm"
                style={{ marginLeft: "1rem" }}
                disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 20, 21, 22, 23]}
                hideDisabledOptions
                disabled={makeStatus === EMakeStatus.READ}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              className="font-bold strict-error-form-item"
              name="endDate"
              label="End Date"
              dependencies={["startDate"]}
              rules={[
                { required: true, message: "Please input end date!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value && getFieldValue("startDate").isBefore(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "Please Select Only Possible Date (Day after start date)"
                      )
                    );
                  },
                }),
              ]}
            >
              <DatePicker
                disabledDate={defaultDisabledDate}
                disabled={makeStatus === EMakeStatus.READ}
              />
            </Form.Item>
            <Form.Item
              className="font-bold"
              name="endHour"
              dependencies={["startHour"]}
              rules={[
                { required: true, message: "Please input end time!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const formValues = {
                      startDate: getFieldValue("startDate"),
                      startHour: getFieldValue("startHour"),
                      endDate: getFieldValue("endDate"),
                      endHour: value,
                    };

                    const hourDiff = mergeDate(formValues);

                    if (hourDiff <= 0) {
                      return Promise.reject(
                        new Error(
                          "Please Select Only Possible Time (time after start hour)"
                        )
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
              // initialValue={filteredAvailableHours[0].value}
            >
              <TimePicker
                minuteStep={30}
                format="HH:mm"
                style={{ marginLeft: "1rem" }}
                disabled={makeStatus === EMakeStatus.READ}
                disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 20, 21, 22, 23]}
                hideDisabledOptions
              />
            </Form.Item>
            {hourDiff > 0 && (
              <div className="hour-diff text-xl leading-9	ml-10">
                {hourDiff} Hour(s)
              </div>
            )}
          </Row>
          <Form.Item
            className="font-bold"
            name="floor"
            label="Floor"
            rules={[{ required: true }]}
          >
            <Select
              disabled={makeStatus === EMakeStatus.READ}
              className="selector-w-10"
              onChange={selectFloor}
            >
              {floorMetaData.isSuccess && floorMetaData.data.length > 0
                ? floorMetaData.data.map((floor) => (
                    <Select.Option key={floor.floor} value={floor.floor}>
                      {floor.floor}
                    </Select.Option>
                  ))
                : null}
            </Select>
          </Form.Item>
          <Form.Item
            className="font-bold"
            name="roomId"
            label="Rooms"
            rules={[{ required: true }]}
          >
            <Select
              size="large"
              style={{ width: 600 }}
              placeholder="Select Room"
              disabled={makeStatus === EMakeStatus.READ}
            >
              {rooms.length > 0 &&
                rooms.map((_room) => (
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
          <Form.Item className="font-bold" name={"creator"} label="Created By">
            <Input size="large" style={{ width: 600 }} disabled={true} />
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
