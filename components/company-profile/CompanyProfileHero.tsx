import { Col, Row, Image } from "antd";
import React, { ReactElement } from "react";

interface Props {}

function CompanyProfileHero({}: Props): ReactElement {
  return (
    <Row className="container mx-auto pt-10">
      <Col span={24}>
        <Image
          src="/assets/company-profile-hero.svg"
          preview={false}
          alt="calendar-hero"
        />
      </Col>
    </Row>
  );
}

export default CompanyProfileHero;
