import { Col, Form, Image, Row, Select, Table } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import HeroBirthDays from "../../components/birthdays/HeroBirthDays";
import { ASSET_URL } from "../../config";
import LayoutHOC from "../../layout/LayoutHOC";
import {
  DEPT_SELECTOR,
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
  const router = useRouter();
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
      width: "280px",
      render: (_self: string, _record: any) => (
        <div className="flex items-center gap-2">
          <div
            className="max-w-100 w-28">
            <Image
  fallback=
{imagePlaceholder}
              width={75}
              height={75}
              alt="No Image"
              src={_record.profilePicUrl}
              preview={false}
            />
          </div>
          <div className="flex flex-col items-start">
            <p
              className="text-left cursor-pointer text-primary-color mb-0"
              onClick={() => router.push(`/staff-contact/${_record.id}`)}
            >
              {_self}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "NICKNAME",
      dataIndex: "nickname",
      width: "100%",
      render: (_self, _record) => <p className="text-center">{_self}</p>,
    },
    {
      title: "DEPARTMENT",
      dataIndex: "department",
      width: "100%",
      render: (_self, _record) => <p className="text-center">{_self}</p>,
    },
    {
      title: "COMPANY",
      dataIndex: "company",
      width: "100%",
      render: (_self, _record) => (
        <p className="text-center">
          {_self === "Mindedge Recruitment" ? (
            <Image
  fallback=
{imagePlaceholder}
              src="/assets/me-recruit.svg"
              alt="mindedgelogo"
              width={100}
            />
          ) : _self === "Mindedge Innovation" ? (
            <Image
  fallback=
{imagePlaceholder} src="/assets/me-logo.svg" alt="mindedgelogo" width={100} />
          ) : _self === "Foodberg" ? (
            <Image
  fallback=
{imagePlaceholder}
              src="/assets/foodberg-logo.svg"
              alt="mindedgelogo"
              width={50}
            />
          ) : (
            <Image
  fallback=
{imagePlaceholder} src="/assets/meu-logo.svg" alt="mindedgelogo" width={100} />
          )}
        </p>
      ),
    },
    {
      title: "BIRTHDATE",
      dataIndex: "birthDate",
      width: "100%",
      render: (_self, _record) => (
        <p className="text-center">{moment(_self).format("DD MMM")}</p>
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
                  <Select size="large"placeholder="MONTH" style={{ width: 250 }}>
                    <Select.Option value="1">January</Select.Option>
                    <Select.Option value="2">February</Select.Option>
                    <Select.Option value="3">March</Select.Option>
                    <Select.Option value="4">April</Select.Option>
                    <Select.Option value="5">May</Select.Option>
                    <Select.Option value="6">June</Select.Option>
                    <Select.Option value="7">July</Select.Option>
                    <Select.Option value="8">August</Select.Option>
                    <Select.Option value="9">September</Select.Option>
                    <Select.Option value="10">October</Select.Option>
                    <Select.Option value="11">November</Select.Option>
                    <Select.Option value="12">December</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="department">
                  <Select size="large"placeholder="DEPARTMENT" style={{ width: 300 }}>
                    <Select.Option key={"ทั้งหมด"} value={""}>
                      {"ทั้งหมด"}
                    </Select.Option>
                    {DEPT_SELECTOR.map((_dept) => (
                      <Select.Option key={_dept} value={_dept}>
                        {_dept}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Table
            loading={staffContactMeta.isLoading}
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
