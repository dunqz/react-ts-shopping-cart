import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { Register } from "./Register";

export function Login() {
  const [form] = Form.useForm();
  const [registerModal, setRegisterModal] = useState(false);

  const handleOpenRegister = () =>{
    setRegisterModal(true);
  }

  const handleCloseRegister = () =>{
    setRegisterModal(false);
  }
  
  return (
    <div className="">
      <Form style={{}} id="form" autoComplete="off">
        <Form.Item noStyle>
          <span style={{ fontFamily: "Roboto, sans-serif" }}>User Name</span>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "25px" }}
          name="userName"
          rules={[
            {
              required: true,
              min: 0,
              max: 64,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item noStyle>
          <span style={{ fontFamily: "Roboto, sans-serif" }}>Password</span>
        </Form.Item>
        <Form.Item
        style={{ marginBottom: "25px" }}
        name="password"
        rules={[
          {
            required: true,
            min: 0,
            max: 64,
          },
        ]}>
          <Input type="password" />
        </Form.Item>
      </Form>
      <Button>LOGIN</Button>
      <Button onClick={handleOpenRegister}>Register</Button>
      <Modal
      open={registerModal}
      onCancel={handleCloseRegister}
      closable={false}
      >
        <Register />
      </Modal>
    </div>
  );
}
