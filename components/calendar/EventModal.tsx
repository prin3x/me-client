import { Button, Col, Modal, Row } from "antd";
import React from "react";

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
      <Row justify='center'>
        <Col>
          <Button type="primary" onClick={close}>Close</Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default EventModal;
