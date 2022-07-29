import { CaretUpOutlined } from "@ant-design/icons";
import { Col, Collapse, Row } from "antd";
import React from "react";
import { IFormsRequest } from "../../services/formsRequest/forms-request.model";

type Props = {
  data: IFormsRequest[];
};

function FormRequestList({ data }: Props) {
  return (
    <Row className="container mx-auto pt-10">
      <Col span={24}>
        <Collapse
          expandIcon={({ isActive }) => (
            <CaretUpOutlined
              style={{ fontSize: "24px" }}
              rotate={isActive ? 0 : 180}
            />
          )}
          className="form-collapse"
          defaultActiveKey={["1"]}
          expandIconPosition={"right"}
        >
          {data?.map((form) => (
            <Collapse.Panel
              header={form.title}
              key={form.id}
              showArrow={true}
              className="bg-primary-color text-xl font-bold"
              style={{ color: "white" }}
            >
              {form?.formsRequestDetail?.map((fr) => (
                <p
                  className="form-download-item text-lg mb-0 py-2 font-semibold"
                  key={fr.id}
                >
                  &emsp; &emsp; {fr.content}
                </p>
              ))}
            </Collapse.Panel>
          ))}
        </Collapse>
      </Col>
    </Row>
  );
}

export default FormRequestList;
