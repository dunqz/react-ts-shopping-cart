import { Button, Form, Input, Modal } from "antd";
import { Image } from "react-bootstrap";
import { fallBackImage } from "../../utilities/properties";
import { createUser } from "../../service/user/user";
import { useState } from "react";
import { Login } from "./Login";
import loginStore from "../../store/loginStore";

export function Register() {
  const [form] = Form.useForm();
  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginPage = () => {
    setOpenLogin(true);
    loginStore.setIsLogin(true);
    loginStore.setIsRegisterOpen(false);
  };
  const handleCloseLogin = () =>{
    setOpenLogin(false);
    loginStore.setIsLogin(false);
  }

  const handleOnFinish = async (values: any) => {
    try {
      console.log(values);
      const result = await createUser(values);
      console.log("Account:", result);
      //handle success
    } catch (error) {
      console.error("Invalid account", error);
      //handle error
    }
  };

  return (
    <div
      style={{
        height: "350px",
        width: "100%",
        padding: 0,
        margin: 0,
        display: "flex",
      }}
    >
      <div
        style={{ marginTop: "45px", marginRight: "30px", marginLeft: "25px" }}
      >
        <Image
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          src="/public/imgs/spaceishtar.png"
          alt={fallBackImage}
        />
      </div>
      <div style={{ marginTop: "45px", width: "70%" }}>
        <Form
          form={form}
          id="form2"
          autoComplete="off"
          onFinish={handleOnFinish}
        >
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
            <Input
              placeholder="Name"
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
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
            <Input
              type="email"
              placeholder="Email Address"
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
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
            <Input
              placeholder="Username"
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
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
            ]}
          >
            <Input
              type="password"
              placeholder="Password"
              style={{ fontFamily: "Roboto, sans-serif" }}
            />
          </Form.Item>
          <div
            style={{
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              fontFamily: "Roboto, sans-serif"
            }}
          >
            <Button form="form2" htmlType="submit" style={{width:"150px"}}>
              Create Account
            </Button>
            <span style={{ marginTop: "15px" }}>
              Already have an account? Go back to{" "}
              <a onClick={handleLoginPage} style={{ color: "purple" }}>
              Login
              </a>
            </span>
            <Modal
            footer={false}
            open={openLogin}
            onCancel={handleCloseLogin}
            closable={false}
            centered
            width={650}
          >
            <Login />
          </Modal>
          </div>
        </Form>
      </div>
    </div>
  );
}
