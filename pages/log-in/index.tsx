import type { NextPage } from 'next';
import {
  Button,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  message,
  Modal,
  Row,
} from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { UserInfo } from '../../services/user/user.model';
import { _login } from '../../services/user/user.service';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [form] = Form.useForm();
  const router = useRouter()

  async function loginUser(user: UserInfo) {
    try {
      await _login(user);
      message.success('เข้าสู่ระบบ');
      router.push('/')
    } catch (e) {
      Modal.error({ title: 'กรุณาตรวจสอบข้อมูลของท่านใหม่' });
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Row justify='center'>
        <Col lg={24}>
          <Image
            src='/assets/login.svg'
            alt='login'
            preview={false}
            width={350}
          />
        </Col>
      </Row>
      <Row justify='center' className='mt-10 w-full'>
        <Col lg={6}>
          <Form form={form} onFinish={loginUser}>
            <Form.Item name='email'>
              <Input
                prefix={<UserOutlined style={{ color: '#fca125' }} />}
                className='border-primary-color'
                type='email'
                placeholder='Email'
              />
            </Form.Item>
            <Form.Item name='password'>
              <Input
                prefix={<KeyOutlined style={{ color: '#fca125' }} />}
                className='border-primary-color'
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Row justify='center'>
              <Form.Item>
                <Button htmlType='submit' type='primary'>Sign In</Button>
              </Form.Item>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
