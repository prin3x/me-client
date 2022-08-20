import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, message, Modal, Row } from "antd";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import LayoutHOC from "../../layout/LayoutHOC";
import { IUserChangePassword, UserInfo } from "../../services/user/user.model";
import { _changePassword, _login } from "../../services/user/user.service";

type Props = {};

function ChangePasswordPage({}: Props) {
  const { userInfo } = useContext(UserContext);
  const [form] = Form.useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function loginUser() {
    setIsLoading(true);
    form.validateFields().then(async (_formValues) => {
      const set = {} as IUserChangePassword;
      set.email = userInfo.email;
      set.password = _formValues.password;
      set.newPassword = _formValues.newPassword;
      try {
        await _changePassword(set);
        message.success("เปลี่ยนรหัสผ่านสำเร็จ");
        router.push("/");
      } catch (e) {
        Modal.error({ title: "กรุณาตรวจสอบข้อมูลของท่านใหม่" });
      } finally {
        setIsLoading(false);
      }
    });
  }
  return (
    <LayoutHOC>
      <div>
        <Row justify="center" className="pb-52 pt-40 w-full">
          <Col lg={12}>
            <Form form={form} onFinish={loginUser} labelAlign='left' labelCol={{lg:12}} wrapperCol={{lg:12}}>
              <Form.Item
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                name="password"
              >
                <Input
                  prefix={<KeyOutlined style={{ color: "#fca125" }} />}
                  className="border-primary-color"
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                label="New Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
                name="newPassword"
              >
                <Input
                  prefix={<KeyOutlined style={{ color: "#fca125" }} />}
                  className="border-primary-color"
                  type="password"
                  placeholder="New Password"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm New Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<KeyOutlined style={{ color: "#fca125" }} />}
                  className="border-primary-color"
                  type="password"
                  placeholder="Confirm New Password"
                />
              </Form.Item>
              <Row justify="center">
                <Form.Item>
                  <Button size="large" loading={isLoading} htmlType="submit" type="primary">
                    Change Password
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default ChangePasswordPage;
