import { LoadingOutlined } from "@ant-design/icons";
import { Col, Form, Image, Row, Select, Spin, Table } from "antd";
import moment from "moment";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import HeroBirthDays from "../../components/birthdays/HeroBirthDays";
import LayoutHOC from "../../layout/LayoutHOC";
import {
  DEPT_SELECTOR,
  ECompanyList,
  ListQueryParamsBirthday,
} from "../../services/contact/contact.model";
import { BIRTHDAY } from "../../services/contact/contact.queryKey";
import {
  _getAllStaffContactBirthdays,
  _getAllStaffContacts,
} from "../../services/contact/contact.service";
import { imagePlaceholder } from "../../utils/placeholder.image";

const INIT_QUERY = {
  startDate: moment().format("YYYY-MM-DD"),
  endDate: moment().endOf('month').format("YYYY-MM-DD"),
  page: 1,
  limit: 10,
};

function BirthDayPage(): ReactElement {
  const [form] = Form.useForm();
  const [queryStr, setQueryStr] = useState<ListQueryParamsBirthday>({} as ListQueryParamsBirthday);
  const staffContactMeta = useQuery([BIRTHDAY, { ...queryStr }], () => queryStr.startDate &&
    _getAllStaffContactBirthdays(queryStr)
  );

  function setQuery() {
    let set = {} as ListQueryParamsBirthday;
    set.limit = 10;
    set.search = form.getFieldValue("search") || "";
    set.department = form.getFieldValue("department") || "";
    set.startDate = `2022-${form.getFieldValue("month")?.padStart(2, "0")}-01`;

    setQueryStr(set);
  }

  function changePage(page, pageSize) {
    const currentSetQuery = { ...queryStr };

    currentSetQuery.page = page;
    currentSetQuery.limit = pageSize;

    setQueryStr(currentSetQuery);
  }

  useEffect(() => {
    if (Object.keys(queryStr).length === 0) return;
    if (!queryStr.startDate) return;
    sessionStorage.setItem(`bd-query`, JSON.stringify(queryStr));
  }, [queryStr]);

  useEffect(() => {
    const query = sessionStorage.getItem(`bd-query`);
    if (query) {
      console.log(query,'query')
      const cur = JSON.parse(query);
      const month = moment(cur.startDate).month() + 1;
      setQueryStr(cur);
      if (isNaN(month)) {
        form.setFieldsValue({ month: "0" });
      } else {
        form.setFieldsValue({
          month: moment(cur.startDate).month() + 1 + "",
          ...cur,
        });
      }
    } else {
      setQuery();
    }
  }, []);

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      ellipsis: true,
      width: 200,
      render: (_self: string, _record: any) => (
        <Link href={`/staff-contact/${_record.id}`} passHref>
          <div className="flex items-center gap-2">
            <div className="max-w-100 w-28">
              <Image
                fallback={imagePlaceholder}
                width={75}
                height={75}
                alt="No Image"
                src={_record.profilePicUrl}
                preview={false}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-left cursor-pointer text-primary-color mb-0 font-semibold	">
                {_self}
              </p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      title: "NICKNAME",
      dataIndex: "nickname",
      width: 200,
      render: (_self, _record) => <p className="text-center  mb-0">{_self}</p>,
    },
    {
      title: "DEPARTMENT",
      dataIndex: "department",
      width: 200,
      render: (_self, _record) => <p className="text-center  mb-0">{_self}</p>,
    },
    {
      title: "COMPANY",
      dataIndex: "company",
      width: 200,
      render: (_self, _record) => (
        <p className="text-center  mb-0">
          {_self.trim() === ECompanyList.MR ? (
            <Image
              fallback={imagePlaceholder}
              src="/assets/me-recruit.svg"
              alt="mindedgelogo"
              preview={false}
              width={100}
            />
          ) : _self.trim() === ECompanyList.MI ? (
            <Image
              fallback={imagePlaceholder}
              src="/assets/me-logo.svg"
              alt="mindedgelogo"
              preview={false}
              width={100}
            />
          ) : _self.trim() === ECompanyList.FB ? (
            <Image
              fallback={imagePlaceholder}
              src="/assets/foodberg-logo.svg"
              alt="mindedgelogo"
              preview={false}
              width={50}
            />
          ) : _self.trim() === ECompanyList.MY ? (
            <Image
              fallback={imagePlaceholder}
              src="/assets/meu-logo.svg"
              alt="mindedgelogo"
              preview={false}
              width={100}
            />
          ) : null}
        </p>
      ),
    },
    {
      title: "BIRTHDAY",
      dataIndex: "birthDate",
      width: 200,
      render: (_self, _record) => (
        <p className="text-center  mb-0">{moment(_self).format("DD MMM")}</p>
      ),
    },
  ];

  if (!queryStr.startDate)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

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
                  <Select
                    size="large"
                    placeholder="MONTH"
                    style={{ width: 250 }}
                  >
                    <Select.Option value="0">ทั้งหมด</Select.Option>
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
                  <Select
                    size="large"
                    placeholder="DEPARTMENT"
                    style={{ width: 300 }}
                  >
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
            tableLayout="auto"
            loading={staffContactMeta.isLoading}
            bordered
            className="set-border custom-table-width"
            rowKey={(self) => self.id}
            scroll={{ x: 1000 }}
            pagination={{
              showTotal: (total, range) => `ทั้งหมด`,
              current: queryStr.page,
              pageSize: queryStr.limit,
              total: staffContactMeta?.data?.total,
              onChange: (current, pageSize) => changePage(current, pageSize),
            }}
            columns={columns}
            dataSource={
              staffContactMeta.isSuccess ? staffContactMeta.data.items : []
            }
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default BirthDayPage;
