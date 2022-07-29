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
                href="https://www.mindedge.co.th/information/me-privacy"
              >
                <Button size="middle" type="primary" className="font-bold" style={{borderRadius: '36px', lineHeight: 1, fontWeight: 'bold'}}>ME</Button>
              </a>
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="https://www.mindedge.co.th/information/mr-privacy"
              >
                <Button size="middle" type="primary" className="font-bold" style={{borderRadius: '36px', lineHeight: 1, fontWeight: 'bold'}}>MR</Button>
              </a>
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="https://www.meandyou.co.th/privacy"
              >
                <Button size="middle" type="primary" className="font-bold" style={{borderRadius: '36px', lineHeight: 1, fontWeight: 'bold'}}>MY</Button>
              </a>
              <a
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="https://www.foodfinity.co.th/privacy"
              >
                <Button size="middle" type="primary" className="font-bold" style={{borderRadius: '36px', lineHeight: 1, fontWeight: 'bold'}}>FB</Button>
              </a>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default PrivacyPolicy;
