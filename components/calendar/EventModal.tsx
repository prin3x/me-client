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
            <p>
              Staff Contact{" "}
              <Link href={`/staff-contact/${event.staffId}`} passHref>
                <span className="underline text-primary-color cursor-pointer">
                  CLICK
                </span>
              </Link>
            </p>
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
