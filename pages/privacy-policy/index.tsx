import React, { ReactElement } from "react";
import { Button, Col, Image, Row } from "antd";
import LayoutHOC from "../../layout/LayoutHOC";
import PrivacyPolicyHero from "../../components/privacy-policy/PrivacyPolicyHero";

interface Props {}

function PrivacyPolicy({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <PrivacyPolicyHero />
        <Row className="container mx-auto rounded-xl pt-5 mt-10 border-primary-color">
          <Col span={24}>
            <Row>
              <Image
                src="/assets/Privacy_Policy.png"
                alt="Privacy_Policy"
                preview={false}
              />
            </Row>
          </Col>
        </Row>
        <Row justify="center" className="mt-5">
          <div>
            สามารถศึกษานโยบายการใช้ข้อมูลส่วนบุคคลของแต่ละบริษัทเพิ่มเติม ได้ที่{" "}
          </div>
        </Row>
        <Row className="mt-5">
          <Col span={24}>
            <Row justify="center" className="gap-5">
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="http://203.154.66.203.8015/ME"
              >
                <Button size="large" type="primary">ME</Button>
              </a>
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="http://203.154.66.203.8015/MR"
              >
                <Button size="large" type="primary">MR</Button>
              </a>
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="http://203.154.66.203.8015/MY"
              >
                <Button size="large" type="primary">MY</Button>
              </a>
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="http://203.154.66.203.8015/FB"
              >
                <Button size="large" type="primary">FB</Button>
              </a>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default PrivacyPolicy;
