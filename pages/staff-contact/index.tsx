import { Col, Row, Image, Form, Select, Input, Table } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ASSET_URL } from "../../config";
import LayoutHOC from "../../layout/LayoutHOC";
import { ALL_CONTACT } from "../../services/contact/contact.queryKey";
import { _getAllStaffContacts } from "../../services/contact/contact.service";
import { ListQueryParams } from "../../services/contact/contact.model";

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

  const columns = [
    {
      title: "NICKNAME",
      dataIndex: "profilePicUrl",
      render: (_self: string) => (
        <Image src={ASSET_URL + _self} alt="" preview={false} />
      ),
    },
    {
      title: "NAME",
      dataIndex: "name",
      render: (_self: string, _record: any) => (
        <div onClick={() => router.push(`/staff-contact/${_record.id}`)}>
          {_self}
        </div>
      ),
    },
    {
      title: "NICKNAME",
      dataIndex: "nickname",
    },
    {
      title: "COMPANY",
      dataIndex: "company",
    },
    {
      title: "DEPARTMENT",
      dataIndex: "department",
    },
    {
      title: "DIVISION",
      dataIndex: "division",
    },
    {
      title: "IP-PHONE",
      dataIndex: "ipPhone",
    },
    {
      title: "E-MAIL",
      dataIndex: "email",
    },
  ];

  function setQuery() {
    let set = {} as ListQueryParams;
    set.limit = 10;
    set.search = form.getFieldValue("search") || "";
    set.department = form.getFieldValue("department") || "";
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
                <Form.Item>
                  <Select placeholder="COMPANY">
                    <Select.Option value="company">COMPANY</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="department">
                  <Select placeholder="DEPARTMENT" style={{ width: 150 }}>
                    <Select.Option value="A">A</Select.Option>
                    <Select.Option value="B">B</Select.Option>
                    <Select.Option value="C">C</Select.Option>
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
            rowKey={(_row) => _row.id}
            tableLayout="fixed"
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

export default StaffContactPage;
