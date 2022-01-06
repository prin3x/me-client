import { Col, Form, Row, Select, Table } from 'antd';
import React, { ReactElement } from 'react';
import HeroBirthDays from '../../components/birthdays/HeroBirthDays';
import LayoutHOC from '../../layout/LayoutHOC';



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
      title: 'BIRTHDATE',
      dataIndex: 'detail',
    },
  ];

function BirthDayPage(): ReactElement {
  const [form] = Form.useForm();
  return (
    <LayoutHOC>
      <div>
        <HeroBirthDays />
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Row>
              <Form form={form} layout='inline' className='flex w-full'>
                <Form.Item>
                  <Select placeholder='MONTH'>
                    <Select.Option value='MONTH'>MONTH</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Select placeholder='2022'>
                    <Select.Option value='2022'>2022</Select.Option>
                  </Select>
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

export default BirthDayPage;
