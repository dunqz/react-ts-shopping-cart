import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Carousel,
  Form,
  Image,
  Input,
  Row,
  Upload,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { fallBackImage } from "../../utilities/properties";
import { Col, Modal } from "react-bootstrap";
import {
  addProduct,
  createProduct,
  uploadImage,
} from "../../service/product/product";

export const AddItem = () => {
  const [image, setImage] = useState<any>("");
  const [addImage, setAddImage] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [upload, setUpload] = useState<any>("");
  const [prodIsCreated, setProdIsCreated] = useState(false);
  const [form] = Form.useForm();

  const handleOnFinish = async (values: any) => {
    try {
      console.log(values);
      const result = await createProduct(values);
      if (result) {
        setProdIsCreated(true);
        console.log(result);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error
    }
  };

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", upload);
      const result: any = await uploadImage(formData, form.getFieldValue("productName"));
      if (result) {
        console.log(result);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  return (
    <div style={{ width: "100%", padding: 0, margin: 0, display: "flex" }}>
      <div
        style={{
          marginTop: "50px",
          width: "40%",
          marginRight: "5%",
          marginLeft: "4%",
        }}
      >
        <Carousel autoplay>
          <div>
            <Image
              src="/imgs/telescope.jpg"
              height={450}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src="/imgs/starySky.jpg"
              width={500}
              height={450}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              src="/imgs/telescope1.jpg"
              height={450}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>
      {prodIsCreated == true ? (
        <div
          style={{
            width: "100%",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "50%" }}>
            <Form style={{ margin: "30px" }} form={form}>
              <Form.Item noStyle>
                <span
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "rgb(157, 158, 173)",
                  }}
                >
                  Seller
                </span>
              </Form.Item>
              <Form.Item style={{ marginBottom: "30px" }} name="seller">
                <Input
                  disabled
                  style={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "rgb(31, 31, 31)",
                  }}
                />
              </Form.Item>
              <Form.Item noStyle>
                <span
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "rgb(157, 158, 173)",
                  }}
                >
                  Product Name :
                </span>
              </Form.Item>
              <Form.Item name="productName">
                <Input
                  disabled
                  style={{
                    border: "none",
                    boxShadow: "none",
                    backgroundColor: "rgb(31, 31, 31)",
                  }}
                />
              </Form.Item>
            </Form>
          </div>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgb(31, 31, 31)",
              border: "none",
            }}
          >
            <Image
              width={250}
              height={250}
              style={{ objectFit: "cover" }}
              src={`data:image/jpeg;base64,${image}`}
              fallback={fallBackImage}
            />
          </Card>
          <Upload
            showUploadList={false}
            beforeUpload={() => false}
            onChange={(e: any) => {
              console.log(e.file);
              setUpload(e.file);
              const reader = new FileReader();
              reader.onloadend = (e: any) => {
                if (typeof reader.result === "string") {
                  setImage(reader.result.split(",")[1]);
                }
              };

              reader.readAsDataURL(e.file);
            }}
          >
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faCamera} />}
              style={{
                transform: "translate(250px,-20px)",
              }}
              onChange={(e) => {
                setAddImage(true);
              }}
            />
          </Upload>
          <Button
            style={{
              fontFamily: "Roboto, sans-serif",
              width: "50%",
              transform: "translate(134px,0)",
            }}
            onClick={() => {
              handleUploadImage();
              alert("Image successfully added");
            }}
          >
            Add Image
          </Button>
        </div>
      ) : (
        <div style={{ width: "50%" }}>
          <Form
            style={{ margin: "30px" }}
            id="form"
            form={form}
            autoComplete="off"
            onFinish={handleOnFinish}
          >
            <Form.Item noStyle>
              <span style={{ fontFamily: "Roboto, sans-serif" }}>
                Product Name
              </span>
            </Form.Item>
            <Form.Item
              style={{ marginBottom: "25px" }}
              name="productName"
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
              <span style={{ fontFamily: "Roboto, sans-serif" }}>Seller</span>
            </Form.Item>
            <Form.Item
              style={{ marginBottom: "30px" }}
              name="seller"
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
              <span style={{ fontFamily: "Roboto, sans-serif" }}>Stock</span>
            </Form.Item>
            <Form.Item
              style={{ marginBottom: "30px" }}
              name="stock"
              rules={[
                {
                  required: true,
                  min: 0,
                  max: 64,
                  pattern: new RegExp(/^\d+$/),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item noStyle>
              <span style={{ fontFamily: "Roboto, sans-serif" }}>Price</span>
            </Form.Item>
            <Form.Item
              style={{ marginBottom: "30px" }}
              name="price"
              rules={[
                {
                  required: true,
                  min: 0,
                  max: 64,
                  pattern: new RegExp(/^\d+$/),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button
              onClick={() => {
                alert("Items successfully added");
              }}
              form="form"
              type="primary"
              htmlType="submit"
            >
              ADD
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};
