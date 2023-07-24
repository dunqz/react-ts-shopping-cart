import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/shop/StoreItem";
import storeItems from "../data/items.json";
import { useEffect, useState } from "react";
import { getAllProduct } from "../service/product/product";
import { Button, Modal } from "antd";
import { AddItem } from "../components/add-item/AddItem";

export function Store() {
  const [product, setProduct] = useState<any[]>([]);
  const [addItem, setAddItem] = useState(false);
  const [sortItem, setSortItem] = useState(false);
  

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result: any = await getAllProduct();
    if (result) {
      setProduct(result.resultData);
    //   const newData = result.resultData.map((item: any)=>{
    //     if(item.image && item.image instanceof Blob){
    //       const reader = new FileReader();
    //       reader.onloadend = () => {
    //         item = {
    //           ...item,
    //           image: reader.result
    //         }
    //         setProduct(prevProd => [...prevProd, item])
    //       }
    //       reader.readAsDataURL(item.image)
    //     }
    //     return item;
    //   })
     }
  };

  const handleCancelAddItemModal = () => {
    setAddItem(false);
  };

  const showModalAddItem = () => {
    setAddItem(true);
  };

  return (
    <>
      <Container>
        <Button onClick={showModalAddItem} style={{ marginBottom: "20px" }}>
          Add Item
        </Button>
        <Modal
          style={{ padding: 0, margin: 0, width: "100%", }}
          centered
          open={addItem}
          onCancel={handleCancelAddItemModal}
          footer={false}
          width={1000}
          destroyOnClose
        >
          <AddItem />
        </Modal>
        {/* {product.length == null && product.length >= 0 ? ( */}
        <Row md={2} xs={1} lg={3} className="g-3">
          {product.map((item: any) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
        {/* ) : (
        <div
          className="ms-auto fw-lighter fs-3"
          style={{
            color: "white",
            height: "200px"
          }}
        >
          No Item Available
        </div>
      )} */}
      </Container>
    </>
  );
}
