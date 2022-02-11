import { Col, Row, Image, Form, Select, Input, Table } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ASSET_URL } from "../../config";
import LayoutHOC from "../../layout/LayoutHOC";
import { ALL_CONTACT } from "../../services/contact/contact.queryKey";
import { _getAllStaffContacts } from "../../services/contact/contact.service";
import {
  COMPANY_SELECTOR,
  DEPT_SELECTOR,
  ECompanyList,
  EDepartment,
  ListQueryParams,
} from "../../services/contact/contact.model";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

interface Props {}



function StaffContactPage({}: Props): ReactElement {
  const [form] = Form.useForm();
  const [staffContactData, setStaffContactData] = useState([]);
  const [queryStr, setQueryStr] = useState<ListQueryParams>({});
  const [page, setPage] = useState(1);
  const staffContactMeta = useQuery([ALL_CONTACT, queryStr, page], () =>
    _getAllStaffContacts(queryStr)
  );
  const router = useRouter();

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return (
        <a>
          <DoubleLeftOutlined />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className="ml-auto">
          <DoubleRightOutlined />
        </a>
      );
    }
  }

  const columns = [
    {
      title: "NICKNAME",
      dataIndex: "profilePicUrl",
      render: (_self: string) => <Image src={_self} alt="" preview={false} />,
    },
    {
      title: "NAME",
      dataIndex: "name",
      render: (_self: string, _record: any) => (
        <p
          className="text-center cursor-pointer"
          onClick={() => router.push(`/staff-contact/${_record.id}`)}
        >
          {_self}
        </p>
      ),
    },
    {
      title: "NICKNAME",
      dataIndex: "nickname",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "COMPANY",
      dataIndex: "company",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "DEPT.",
      dataIndex: "department",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "POSITION",
      dataIndex: "position",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "IP-PHONE",
      dataIndex: "ipPhone",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
    {
      title: "E-MAIL",
      dataIndex: "email",
      render: (_self) => <p className="text-center">{_self}</p>,
    },
  ];

  function setQuery() {
    let set = {} as ListQueryParams;
    set.limit = 10;
    set.search = form.getFieldValue("search") || "";
    set.department = form.getFieldValue("department") || "";
    set.company = form.getFieldValue("company") || "";
    set.page = page;

    setQueryStr(set);
  }

  useEffect(() => {
    if (staffContactMeta.isSuccess) {
      setStaffContactData(staffContactMeta?.data?.items);
    }
    setQuery();
  }, [staffContactMeta.data, page]);

  return (
    <LayoutHOC>
      <div>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Image
              src="/assets/staff-contact.svg"
              preview={false}
              alt="staff-contact"
            />
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row>
              <Form form={form} layout="inline" onValuesChange={setQuery}>
                <Form.Item name="company">
                  <Select
                    placeholder="COMPANY"
                    style={{ width: 200 }}
                  >
                    <Select.Option key={"ทั้งหมด"} value={""}>
                      {"ทั้งหมด"}
                    </Select.Option>
                    {COMPANY_SELECTOR.map((_comp) => (
                      <Select.Option key={_comp} value={_comp}>
                        {_comp}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="department">
                  <Select placeholder="DEPARTMENT" style={{ width: 150 }}>
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
                <Form.Item name="search">
                  <Input placeholder="SEARCH" />
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Table
            loading={staffContactMeta.isLoading}
            className="table-noshow-pagination"
            bordered
            rowKey={(_row) => _row.id}
            tableLayout="fixed"
            scroll={{ x: "100%" }}
            pagination={{
              position: ["bottomCenter"],
              onChange: (_page) => setPage(_page),
              showTotal: (total, range) => (
                <div className="text-center">{`ทั้งหมด ${
                  staffContactMeta?.data?.total || 0
                } คน`}</div>
              ),
              total: staffContactMeta?.data?.total,
              showSizeChanger: false,
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
