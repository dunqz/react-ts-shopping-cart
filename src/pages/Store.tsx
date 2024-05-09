import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { StoreItem } from "../components/shop/StoreItem";
import { useEffect, useState } from "react";
import { getAllProduct, getFilterStoreItem } from "../service/product/product";
import { Button, Carousel, Image, Input, Modal, Select } from "antd";
import { AddItem } from "../components/add-item/AddItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export function Store() {
  const location = useLocation();
  const [product, setProduct] = useState<any[]>([]);
  const [addItem, setAddItem] = useState(false);
  const [sortItem, setSortItem] = useState(false);
  const [showSecondPanel, setShowSecondPanel] = useState(
    location.pathname == "/store"
  );
  const [searchText, setSearchText] = useState("");
  const [classificationFilter, setClassificationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    loadProduct();
    setShowSecondPanel(location.pathname === "/store");
  }, [location, searchText, classificationFilter]);

  const loadProduct = async () => {
    try {
      const result = await getFilterStoreItem({ productName: searchText, classify: classificationFilter });
      if (result) {
        setProduct(result.resultData);
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancelAddItemModal = () => {
    setAddItem(false);
  };

  const showModalAddItem = () => {
    setAddItem(true);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    // Call loadProduct to apply filters
    loadProduct();
  };

  const handleClassificationFilter = (value: string) => {
    setClassificationFilter(value);
    // Call loadProduct to apply filters
    loadProduct();
  };

  const handlePriceFilter = (value: string) => {
    setPriceFilter(value);
  };

  const handleResetFilters = () => {
    setSearchText('');
    setClassificationFilter('');
    setPriceFilter('');
    // Call loadProduct to fetch all products
    loadProduct();
  };

  return (
    <>
      {showSecondPanel && (
        <Navbar sticky="top" className="bg-transparent shadow-lg mb-5">
          <Button
            onClick={showModalAddItem}
            icon={<FontAwesomeIcon icon={faPlus} />}
            style={{
              marginLeft: "120px",
            }}
          >
            Add Item{" "}
          </Button>
          <Modal
            style={{ padding: 0, margin: 0, width: "100%" }}
            centered
            open={addItem}
            onCancel={handleCancelAddItemModal}
            footer={false}
            width={1100}
            destroyOnClose
          >
            <AddItem />
          </Modal>
          <Input.Search
            placeholder="Search items"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 200, marginLeft: 10 }}
          />
           {/* Broken*/}
          <Select
            allowClear
            mode="multiple"
            placeholder="Filter by classification types"
            style={{ marginLeft: "5px", width: "250px" }}
            onChange={handleClassificationFilter}
            options={[
              { value: "reflection", label: "reflection" },
              { value: "refractor", label: "refractor"},
              { value: "cassegrains", label:"cassegrains" },
            ]}
          ></Select>
           {/* Broken*/}
          <Select
            allowClear
            placeholder="Filter by price"
            style={{ width: 200, marginLeft: 10 }}
            onChange={handlePriceFilter}
            options={[
              { value: "ascending", label: "Ascending Order" },
              { value: "descending", label: "Descending Order" },
            ]}
          >
            {/* Add more options as needed */}
          </Select>
          <Button onClick={handleResetFilters} style={{ marginLeft: 10 }}>
            Reset Filters
          </Button>
        </Navbar>
      )}
      <Container>
        {product.length != 0 ? (
          <>
            <Row md={2} xs={1} lg={3} className="g-3">
              {product.map((item: any) => (
                <Col key={item.id}>
                  <StoreItem {...item} />
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <div
            className="ms-auto fw-lighter fs-3"
            style={{
              color: "white",
              height: "200px",
            }}
          >
            No Item Available
          </div>
        )}
      </Container>
    </>
  );
}
