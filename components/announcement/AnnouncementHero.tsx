import { Col, Row, Image } from "antd";
import React, { ReactElement } from "react";

function AnnouncementHero(): ReactElement {
  return (
    <Row className="container mx-auto pt-10">
      <Col span={24}>
        <Image
          src="/assets/announcement-hero.png"
          preview={false}
          height="200"
          alt="calendar-hero"
        />
      </Col>
    </Row>
  );
}

export default AnnouncementHero;
