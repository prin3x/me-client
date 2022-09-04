import { Col, Row, Image, Form, Select, Input, Table } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import LayoutHOC from "../../layout/LayoutHOC";
import { ALL_CONTACT } from "../../services/contact/contact.queryKey";
import { _getAllStaffContacts } from "../../services/contact/contact.service";
import {
  COMPANY_SELECTOR,
  DEPT_SELECTOR,
  ListQueryParams,
} from "../../services/contact/contact.model";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { imagePlaceholder } from "../../utils/placeholder.image";
import Link from "next/link";

interface Props {}

function StaffContactPage({}: Props): ReactElement {
  const [form] = Form.useForm();
  const [staffContactData, setStaffContactData] = useState([]);
  const [queryStr, setQueryStr] = useState<ListQueryParams>({});
  const staffContactMeta = useQuery([ALL_CONTACT, queryStr], () =>
    _getAllStaffContacts(queryStr)
  );
  const router = useRouter();

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return (
        <a>
          <div className="flex items-center gap-2 text-primary-color">
            <DoubleLeftOutlined /> <span className="text-xs">ก่อนหน้า</span>
          </div>
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className="ml-auto">
          <div className="flex items-center gap-2 text-primary-color">
            <span className="text-xs">ถัดไป</span> <DoubleRightOutlined />
          </div>
        </a>
      );
    }
  }

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      width: "400px",
      render: (_self: string, _record: any) => (
        <Link href={`/staff-contact/${_record.id}`} passHref>
          <div className="flex items-center gap-2">
            <div className="">
              <Image
                width={50}
                height={50}
                alt=""
                src={_record.profilePicUrl}
                className="staff-image"
                fallback={imagePlaceholder}
                preview={false}
              />
            </div>
            <div className="flex flex-col items-start ">
              <p className="text-left cursor-pointer text-primary-color mb-0 font-semibold	leading-4	truncate">
                {_self}
              </p>
              <p className="text-left cursor-pointer mb-0">{_record.nameTH}</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      title: "NICKNAME",
      dataIndex: "nickname",
      width: "25px",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "COMPANY",
      dataIndex: "company",
      width: "25px",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "DEPARTMENT",
      dataIndex: "department",
      width: "130px",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "IP-PHONE",
      dataIndex: "ipPhone",
      width: "200px",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "E-MAIL",
      dataIndex: "email",
      width: "150px",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
  ];

  function setQuery() {
    let set = {} as ListQueryParams;
    set.limit = queryStr.limit;
    set.search = form.getFieldValue("search") || "";
    set.department = form.getFieldValue("department") || "";
    set.company = form.getFieldValue("company") || "";
    set.page = 1;

    setQueryStr(set);
  }

  const onChangePagesize = (_page, _pageSize) => {
    const currentStr = { ...queryStr };
    currentStr.limit = _pageSize;
    currentStr.page = _page;

    setQueryStr(currentStr);
  };

  useEffect(() => {
    if (staffContactMeta.isSuccess) {
      setStaffContactData(staffContactMeta?.data?.items);
    }
  }, [staffContactMeta.data]);

  useEffect(() => {
    if (Object.keys(queryStr).length === 0) return;
    sessionStorage.setItem(`staff-contact-query`, JSON.stringify(queryStr));
  }, [queryStr]);

  useEffect(() => {
    const query = sessionStorage.getItem(`staff-contact-query`);
    if (query) {
      setQueryStr(JSON.parse(query));
      form.setFieldsValue(queryStr);
    }
  }, []);

  return (
    <LayoutHOC>
      <div className="staff-contact-page">
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Image
              src="/assets/staff-hero.png"
              preview={false}
              alt="staff-contact"
            />
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row>
              <Form
                form={form}
                layout="inline"
                className="w-full"
                onValuesChange={setQuery}
              >
                <Form.Item name="company">
                  <Select
                    size="large"
                    placeholder="COMPANY"
                    style={{ width: 300 }}
                  >
                    <Select.Option key={"ALL"} value={""}>
                      {"ALL"}
                    </Select.Option>
                    {COMPANY_SELECTOR.map((_comp) => (
                      <Select.Option key={_comp} value={_comp}>
                        {_comp}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="department">
                  <Select
                    size="large"
                    placeholder="DEPARTMENT"
                    style={{ width: 350 }}
                  >
                    <Select.Option key={"ALL"} value={""}>
                      {"ALL"}
                    </Select.Option>
                    {DEPT_SELECTOR.map((_dept) => (
                      <Select.Option key={_dept} value={_dept}>
                        {_dept}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="search" style={{ marginLeft: "auto" }}>
                  <Input
                    placeholder="SEARCH"
                    className="ml-auto text-right search-text-right"
                    prefix={
                      <SearchOutlined
                        style={{
                          color: "#D8D8D8",
                        }}
                      />
                    }
                  />
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Table
            loading={staffContactMeta.isLoading}
            className="table-noshow-pagination unset-border w-full mb-10"
            scroll={{ x: true }}
            bordered
            rowKey={(_row) => _row.id}
            tableLayout="fixed"
            pagination={{
              position: ["bottomCenter"],
              pageSize: queryStr.limit,
              onChange: (_page, _pageSize) =>
                onChangePagesize(_page, _pageSize),
              showTotal: (total, range) => (
                <div className="text-center font-bold">{`ทั้งหมด ${
                  staffContactMeta?.data?.total || 0
                } คน`}</div>
              ),
              total: staffContactMeta?.data?.total,
              showSizeChanger: true,
              itemRender,
            }}
            columns={columns}
            dataSource={staffContactData}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default StaffContactPage;
