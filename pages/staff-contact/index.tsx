import { Col, Row, Image, Form, Select, Input, Table } from 'antd';
import React, { ReactElement } from 'react';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

const columns = [
  {
    title: 'NAME',
    dataIndex: 'date_time',
  },
  {
    title: 'NICKNAME',
    dataIndex: 'ip',
  },
  {
    title: 'COMPANY',
    dataIndex: 'detail',
  },
  {
    title: 'DEPARTMENT',
    dataIndex: 'detail',
  },
  {
    title: 'DIVISION',
    dataIndex: 'detail',
  },
  {
    title: 'IP-PHONE',
    dataIndex: 'detail',
  },
  {
    title: 'E-MAIL',
    dataIndex: 'detail',
  },
];

function StaffContactPage({}: Props): ReactElement {
  const [form] = Form.useForm();
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
            pagination={{
              showTotal: (total, range) => `ทั้งหมด`,
              current: 1,
              defaultPageSize: 10,
              total: 100,
            }}
            columns={columns}
            dataSource={[]}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default StaffContactPage;
