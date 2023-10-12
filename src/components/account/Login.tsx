import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { Register } from "./Register";
import { Image } from "react-bootstrap";
import { fallBackImage } from "../../utilities/properties";
import { createUser } from "../../service/user/user";
import { observer } from "mobx-react";
import loginStore from "../../store/loginStore";

export const Login = observer(() => {
  const [form] = Form.useForm();
  const [registerModal, setRegisterModal] = useState(false);

  const handleOpenRegister = () => {
    setRegisterModal(true);
    loginStore.setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterModal(false);
  };

  const handleOnFinish = async (values:any) =>{
    //add login
    loginStore.setIsLogin(true)
    console.log("login")
  }

  return (
    <div
      style={{
        height: "300px",
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
        <Form id="form" autoComplete="off" onFinish={handleOnFinish}>
          <Form.Item
            style={{ marginBottom: "25px", marginTop: "25px" }}
            name="Username"
            rules={[
              {
                required: true,
                min: 0,
                max: 64,
              },
            ]}
          >
            <Input
              style={{ width: "300px", fontFamily: "Roboto, sans-serif" }}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "25px" }}
            name="Password"
            rules={[
              {
                required: true,
                min: 0,
                max: 64,
              },
            ]}
          >
            <Input
              style={{ width: "300px", fontFamily: "Roboto, sans-serif" }}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </Form>
        <Button form="form" htmlType="submit">LOGIN</Button>
        <div
          style={{
            marginTop: "40px",
            color: "grey",
            fontFamily: "Roboto, sans-serif",
            letterSpacing: ".9px",
            wordSpacing: ".2px",
          }}
        >
          <span>
            Don't have an account?{" "}
            <a onClick={handleOpenRegister} style={{ color: "purple" }}>
              Register
            </a>
          </span>
          <Modal
            footer={false}
            open={registerModal}
            onCancel={handleCloseRegister}
            closable={false}
            centered
            width={650}
          >
            <Register />
          </Modal>
        </div>

      </div>
    </div>
  );
});
