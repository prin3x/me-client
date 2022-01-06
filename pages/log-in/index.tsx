import type { NextPage } from 'next';
import { Button, Checkbox, Col, Form, Image, Input, Row } from 'antd';

const Home: NextPage = () => {
  const [form] = Form.useForm();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Row justify='center'>
        <Col>
          <Image
            src='/assets/login.svg'
            alt='login'
            preview={false}
            width={350}
          />
        </Col>
      </Row>
      <Row justify='center' className='mt-10'>
        <Col>
          <Form form={form}>
            <Form.Item name='email'>
              <Input type='email' />
            </Form.Item>
            <Form.Item name='password'>
              <Input type='password' />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Row justify='center'>
              <Form.Item>
                <Button type='primary'>Sign In</Button>
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
