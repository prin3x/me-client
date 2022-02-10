import { Col, Form, Image, Row, Select, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import HeroBirthDays from "../../components/birthdays/HeroBirthDays";
import { ASSET_URL } from "../../config";
import LayoutHOC from "../../layout/LayoutHOC";
import {
  ListQueryParams,
  ListQueryParamsBirthday,
} from "../../services/contact/contact.model";
import { BIRTHDAY } from "../../services/contact/contact.queryKey";
import {
  _getAllStaffContactBirthdays,
  _getAllStaffContacts,
} from "../../services/contact/contact.service";

const INIT_QUERY = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().format("YYYY-MM-DD"),
};

function BirthDayPage(): ReactElement {
  const [form] = Form.useForm();
  const [staffContactData, setStaffContactData] = useState([]);
  const [queryStr, setQueryStr] = useState<ListQueryParamsBirthday>(INIT_QUERY);
  const [page, setPage] = useState(1);
  const staffContactMeta = useQuery([BIRTHDAY, queryStr, page], () =>
    _getAllStaffContactBirthdays(queryStr)
  );

  function setQuery() {
    let set = {} as ListQueryParamsBirthday;
    set.limit = 10;
    set.search = form.getFieldValue("search") || "";
    set.department = form.getFieldValue("department") || "";
    set.page = page;
    set.startDate = `2022-${form.getFieldValue("month")?.padStart(2, "0")}-01`;

    setQueryStr(set);
  }

  useEffect(() => {
    if (staffContactMeta.isSuccess) {
      setStaffContactData(staffContactMeta?.data?.items);
    }
    setQuery();
  }, [staffContactMeta.data, page]);

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      render: (_self, _record) => (
        <div className="flex items-center gap-2">
          <Image
            src={ASSET_URL + _record.profilePicUrl}
            alt=""
            preview={false}
            width={75}
          />
          <p className="text-md font-regular">{_self}</p>
        </div>
      ),
    },
    {
      title: "NICKNAME",
      dataIndex: "nickname",
      render: (_self, _record) => <p className="text-center">{_self}</p>,
    },
    {
      title: "COMPANY",
      dataIndex: "company",
      render: (_self, _record) => <p className="text-center">{_self}</p>,
    },
    {
      title: "DEPARTMENT",
      dataIndex: "department",
      render: (_self, _record) => <p className="text-center">{_self}</p>,
    },
    {
      title: "BIRTHDATE",
      dataIndex: "birthDate",
      render: (_self, _record) => (
        <p className="text-center">{moment(_self).format("MMM DD")}</p>
      ),
    },
  ];

  return (
    <LayoutHOC>
      <div>
        <HeroBirthDays />
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row>
              <Form
                form={form}
                layout="inline"
                className="flex w-full"
                onValuesChange={setQuery}
              >
                <Form.Item
                  name="month"
                  initialValue={(moment().month() + 1).toString()}
                >
                  <Select placeholder="MONTH" style={{ width: 150 }}>
                    <Select.Option value="1">Jan</Select.Option>
                    <Select.Option value="2">Feb</Select.Option>
                    <Select.Option value="3">Mar</Select.Option>
                    <Select.Option value="4">Apr</Select.Option>
                    <Select.Option value="5">May</Select.Option>
                    <Select.Option value="6">Jun</Select.Option>
                    <Select.Option value="7">Jul</Select.Option>
                    <Select.Option value="8">Aug</Select.Option>
                    <Select.Option value="9">Sep</Select.Option>
                    <Select.Option value="10">Oct</Select.Option>
                    <Select.Option value="11">Nov</Select.Option>
                    <Select.Option value="12">Dec</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="department">
                  <Select placeholder="DEPARTMENT" style={{ width: 150 }}>
                    <Select.Option value="A">A</Select.Option>
                    <Select.Option value="B">B</Select.Option>
                    <Select.Option value="C">C</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Table
            bordered
            tableLayout="fixed"
            rowKey={(self) => self.id}
            scroll={{ x: "100%" }}
            pagination={{
              showTotal: (total, range) => `ทั้งหมด`,
              current: page,
              defaultPageSize: 10,
              total: staffContactMeta?.data?.total,
              onChange: (current) => setPage(current),
            }}
            columns={columns}
            dataSource={staffContactData}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default BirthDayPage;
