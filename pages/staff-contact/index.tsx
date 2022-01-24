import { Col, Row, Image, Form, Select, Input, Table } from 'antd';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import LayoutHOC from '../../layout/LayoutHOC';
import { ALL_CONTACT } from '../../services/contact/contact.queryKey';
import { _getAllStaffContacts } from '../../services/contact/contact.service';

interface Props {}


function StaffContactPage({}: Props): ReactElement {
  const [form] = Form.useForm();
  const [staffContactData, setStaffContactData] = useState([])
  const staffContactMeta = useQuery([ALL_CONTACT], _getAllStaffContacts)
  const router = useRouter()


const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',
    render: (_self : string, _record : any) => <div onClick={() => router.push(`/staff-contact/${_record.id}`)}>{_self}</div>
  },
  {
    title: 'NICKNAME',
    dataIndex: 'nickname',
  },
  {
    title: 'COMPANY',
    dataIndex: 'company',
  },
  {
    title: 'DEPARTMENT',
    dataIndex: 'department',
  },
  {
    title: 'DIVISION',
    dataIndex: 'division',
  },
  {
    title: 'IP-PHONE',
    dataIndex: 'ipPhone',
  },
  {
    title: 'E-MAIL',
    dataIndex: 'email',
  },
];

  useEffect(() => {
    if(staffContactMeta.isSuccess){

      setStaffContactData(staffContactMeta.data)
    }
  },[staffContactMeta.data])

  return (
    <LayoutHOC>
      <div>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Image
              src='/assets/staff-contact.svg'
              preview={false}
              alt='staff-contact'
            />
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Row>
              <Form form={form} layout='inline'>
                <Form.Item>
                  <Select placeholder='COMPANY'>
                    <Select.Option value='company'>COMPANY</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select placeholder='DEPARTMENT'>
                    <Select.Option value='DEPARTMENT'>DEPARTMENT</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Input placeholder='SEARCH' />
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Table
            tableLayout='fixed'
            scroll={{ x: '100%' }}
            // pagination={{
            //   showTotal: (total, range) => `ทั้งหมด`,
            //   current: 1,
            //   defaultPageSize: 10,
            //   total: 100,
            // }}
            columns={columns}
            dataSource={staffContactData}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default StaffContactPage;
