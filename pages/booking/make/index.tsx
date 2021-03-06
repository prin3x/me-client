import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Select,
} from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import MakeBookingForm from "../../../components/booking/MakeBookingForm";
import LayoutHOC from "../../../layout/LayoutHOC";
import {
  EMakeStatus,
  ICreateMeeting,
} from "../../../services/meetingRoom/meeting-room.model";
import {
  _createBooking,
  _getAllBookingEvents,
  _getAllRooms,
  _getAllRoomsAvb,
  _getBookingEventById,
  _removeMeetingEvent,
  _updateMeetingEvent,
} from "../../../services/meetingRoom/meeting-room.service";

interface Props {}

function MakeBooking({}: Props): ReactElement {
  const router = useRouter();
  const [form] = Form.useForm();
  const roomsMeta = useQuery(["rooms"],() => _getAllRoomsAvb());
  const [makeStatus, setMakeStatus] = useState(EMakeStatus.MAKE);

  const submitRoomBooking = (): void => {
    form.validateFields().then(async (_formValues: ICreateMeeting) => {
      const formResult = await form.validateFields();
      const startTime = _formValues.date.set({
        hour: formResult.startHour - 1,
        minute: formResult.startMinute + 30,
        second: 0,
      });
      const endTime = startTime.clone().add("minute", formResult.endHour + 30);
      let set = {} as any;
      set.title = formResult.title;
      set.description = formResult.description;
      set.start = startTime;
      set.end = endTime;
      set.roomId = formResult.roomId;
      set.type = formResult.type;
      set.allDay = formResult.allDay;

      try {
        await _createBooking(set);
        message.success("Created Successfully");
        router.push("/booking/");
      } catch (e) {
        let errMessage = e.response.message;
        if (e.response.status === 400) {
          errMessage = "Unavailble Slot";
        }
        message.error(errMessage);
      }
    });
  };

  const updateRoomBooking = async (): Promise<void> => {
    const formResult = await form.validateFields();
    const startTime = formResult.date.set({
      hour: formResult.startHour - 1,
      minute: formResult.startMinute + 30,
      second: 0,
    });
    const endTime = startTime.clone().add("minute", formResult.endHour + 30);
    let set = {} as any;
    set.title = formResult.title;
    set.description = formResult.description;
    set.start = startTime;
    set.end = endTime;
    set.roomId = formResult.roomId;
    set.type = formResult.type;
    set.allDay = formResult.allDay;

    try {
      await _updateMeetingEvent(router.query.id, set);
      message.success("Updated Successfully");
      router.push("/booking/");
    } catch (e) {
      message.error(e.response.message);
    }
  };

  const removeRoomBooking = async (): Promise<void> => {
    try {
      await _removeMeetingEvent(router.query.id);
      message.success("Updated Successfully");
      router.push("/booking/");
    } catch (e) {
      message.error(e.response.message);
    }
  };

  async function getMeetingDetailsFromId(id) {
    try {
      const meetingDetails = await _getBookingEventById(id);
      if (meetingDetails.isOwner) {
        setMakeStatus(EMakeStatus.EDIT);
      } else {
        setMakeStatus(EMakeStatus.READ);
      }

      form.setFieldsValue({
        title: meetingDetails.title,
        description: meetingDetails.description,
        start: moment(meetingDetails.start),
        end: moment(meetingDetails.end),
      });
    } catch (e) {
      router.push("/");
    }
  }

  useEffect(() => {
    const id = +router.query.id;
    if (id) {
      getMeetingDetailsFromId(id);
    }

    return () => setMakeStatus(EMakeStatus.MAKE);
  }, [router]);

  return (
    <LayoutHOC>
      <>
        <MakeBookingForm
          submitRoomBooking={submitRoomBooking}
          form={form}
          roomsMeta={roomsMeta}
          updateRoomBooking={updateRoomBooking}
          removeRoomBooking={removeRoomBooking}
          makeStatus={makeStatus}
        />
      </>
    </LayoutHOC>
  );
}

export default MakeBooking;
