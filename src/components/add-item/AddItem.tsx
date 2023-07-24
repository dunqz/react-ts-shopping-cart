import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Image, Input, Row, Upload, message } from "antd";
import { useState } from "react";
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
  const [form] = Form.useForm();

  const handleOnFinish = async (values: any) => {
    try {

      const formData = new FormData();
      formData.append("image", upload.name); 

      formData.append(
        "productDto",
        JSON.stringify({
          productName: values.productName,
          supplierName: values.supplierName,
          companyId: values.companyId,
          stock: values.stock,
          price: values.price,
        })
      );

      const result = await addProduct(formData);
      console.log("Product added:", result);
      // Handle success
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error
    }
  };

  return (
    <div style={{ width: "100%", padding: 0, margin: 0, display: "flex" }}>
      <div style={{ width: "70%" }}>
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
            <span style={{ fontFamily: "Roboto, sans-serif" }}>Supplier</span>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "30px" }}
            name="supplierName"
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
            <span style={{ fontFamily: "Roboto, sans-serif" }}>
              Company Name/ID
            </span>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "30px" }}
            name="companyId"
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
          <Button form="form" type="primary" htmlType="submit">
            ADD
          </Button>
        </Form>
      </div>
      <div style={{ marginTop: "50px", width: "30%", marginLeft: "2.5rem" }}>
        <div>
          <Image
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
            src={`data:image/jpeg;base64,${image}`}
            fallback={fallBackImage}
          />
        </div>
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translate(79px,0)",
            }}
            onChange={(e) => {
              setAddImage(true);
            }}
          />
        </Upload>
      </div>
    </div>
  );
};
