import { Button, Form, Input } from "antd";

export function Register() {
  const [form] = Form.useForm();
  return (
    <div>
      <Form style={{}} id="form" autoComplete="off">
      <Form.Item noStyle>
          <span style={{ fontFamily: "Roboto, sans-serif" }}>Name</span>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "25px" }}
          name="name"
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
          <span style={{ fontFamily: "Roboto, sans-serif" }}>Email Address</span>
        </Form.Item>
        <Form.Item
          style={{ marginBottom: "25px" }}
          name="emailAddress"
          rules={[
            {
              required: true,
              min: 0,
              max: 64,
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
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
      <Button>Create Account</Button>
    </div>
  );
}
