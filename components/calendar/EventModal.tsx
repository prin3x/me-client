import { Button, Col, Modal, Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ECalendarEventType } from "../../services/calendar/calendar.model";
import { _getOneStaff } from "../../services/contact/contact.service";

type Props = {
  visible: boolean;
  event: any;
  close: () => void;
};

function EventModal({ visible, event, close }: Props) {
  return (
    <Modal
      visible={visible}
      onCancel={close}
      title={event.title}
      footer={false}
    >
      <Row>
        <Col>{event.description}</Col>
      </Row>
      {event.categoryName === ECalendarEventType.BIRTHDAY && (
        <Row>
          <Col>
            <Link href={`/staff-contact/${event.staffId}`}>
              Go To Employee&apos;s Page
            </Link>
          </Col>
        </Row>
      )}
      <Row justify="center">
        <Col>
          <Button size="large" type="primary" onClick={close}>
            Close
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default EventModal;
