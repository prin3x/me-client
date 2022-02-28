import {  UpOutlined } from "@ant-design/icons";
import { Col, Collapse, Row } from "antd";
import React, { ReactElement } from "react";
import FormRequestHero from "../../components/form-request/FormRequestHero";
import LayoutHOC from "../../layout/LayoutHOC";

interface Props {}

function FormRequest({}: Props): ReactElement {

  return (
    <LayoutHOC>
      <div>
        <FormRequestHero />
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Collapse
              expandIcon={({ isActive }) => <UpOutlined style={{fontSize: '24px'}} rotate={isActive ? 180 : 0} />}
              className="form-collapse"
              defaultActiveKey={["1"]}
              expandIconPosition={"right"}
            >
              <Collapse.Panel
                header="Training"
                key="1"
                showArrow={true}
                className="bg-primary-color text-xl"
                style={{ color: "white" }}
              >
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; In-House Training Request
                </p>
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; Public Training Request
                </p>
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; แบบฟอร์มยืม-เบิกอุปกรณ์ตกแต่ง
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header="QMD"
                key="2"
                showArrow={true}
                className="bg-primary-color text-xl"
              >
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; Job Request
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header="F&A"
                key="3"
                showArrow={true}
                className="bg-primary-color text-xl"
              >
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; แบบฟอร์มชี้แจ้งค่าใช้จ่าย
                </p>
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; แบบฟอร์มเบิกค่าเดินทาง
                </p>
              </Collapse.Panel>
              <Collapse.Panel
                header="HR"
                key="4"
                showArrow={true}
                className="bg-primary-color text-xl"
              >
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; แบบฟอร์มขอหนังสือรับรอง
                </p>
                <p className="form-download-item text-lg mb-0 py-2 font-regular">
                  &emsp; &emsp; แบบฟอร์มเบิกค่ารักษาพยาบาล
                </p>
              </Collapse.Panel>
            </Collapse>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default FormRequest;
