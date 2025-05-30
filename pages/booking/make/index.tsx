import { Form, message } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import MakeBookingForm from "../../../components/booking/MakeBookingForm";
import LayoutHOC from "../../../layout/LayoutHOC";
import { EMakeStatus } from "../../../services/meetingRoom/meeting-room.model";
import {
  _createBooking,
  _getBookingEventById,
  _removeMeetingEvent,
  _updateMeetingEvent,
} from "../../../services/meetingRoom/meeting-room.service";

interface Props {}

function MakeBooking({}: Props): ReactElement {
  const router = useRouter();
  const [form] = Form.useForm();
  const [makeStatus, setMakeStatus] = useState(EMakeStatus.MAKE);

  const submitRoomBooking = (): void => {
    form.validateFields().then(async (_formValues) => {
      const startTime =
        moment(_formValues.startDate).format("YYYY-MM-DD") +
        " " +
        moment(_formValues.startHour).format("HH:mm");
      const endTime =
        moment(_formValues.endDate).format("YYYY-MM-DD") +
        " " +
        moment(_formValues.endHour).format("HH:mm");
      let set = {} as any;
      set.title = _formValues.title;
      set.description = _formValues.description;
      set.start = startTime;
      set.end = endTime;
      set.roomId = _formValues.roomId;
      set.type = _formValues.type;
      set.allDay = _formValues.allDay;

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
    form.validateFields().then(async (_formValues) => {
      const startTime =
        moment(_formValues.startDate).format("YYYY-MM-DD") +
        " " +
        moment(_formValues.startHour).format("HH:mm");
      const endTime =
        moment(_formValues.endDate).format("YYYY-MM-DD") +
        " " +
        moment(_formValues.endHour).format("HH:mm");
      let set = {} as any;
      set.title = _formValues.title;
      set.description = _formValues.description;
      set.start = startTime;
      set.end = endTime;
      set.roomId = _formValues.roomId;
      set.type = _formValues.type;
      set.allDay = _formValues.allDay;

      try {
        await _updateMeetingEvent(router.query.id, set);
        message.success("Updated Successfully");
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
        floor: meetingDetails.room.floor,
        roomId: meetingDetails.room.name,
        startDate: moment(meetingDetails.start),
        startHour: moment(meetingDetails.start),
        endDate: moment(meetingDetails.end),
        endHour: moment(meetingDetails.end),
        creator: meetingDetails.creator?.nameTH,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <LayoutHOC>
      <MakeBookingForm
        submitRoomBooking={submitRoomBooking}
        form={form}
        updateRoomBooking={updateRoomBooking}
        removeRoomBooking={removeRoomBooking}
        makeStatus={makeStatus}
      />
    </LayoutHOC>
  );
}

export default MakeBooking;
