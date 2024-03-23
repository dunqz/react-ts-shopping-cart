import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useEffect, useState } from "react";
import { Divider, Image } from "antd";

type StoreItemProps = {
  id: number;
  productName: string;
  price: number;
  image: string;
  classify: string;
  seller: string;
};

export function StoreItem({
  id,
  productName,
  price,
  image,
  classify,
  seller,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card
      className="h-100"
      style={{
        backgroundColor: "rgba(20,30,40,.6)",
        color: "#d2d8dd",
        fontFamily: "Roboto, serif",
        width: "320px",
      }}
    >
      <Image
        src={`data:image/jpeg;base64,${image}`}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{productName}</span>
        </Card.Title>
        <Divider style={{ margin: 0, marginBottom: "5px", padding: 0 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
          }}
        >
          <span
            className="ms-2 text-muted"
            style={{
              fontFamily: "Roboto, serif",
            }}
          >
            Telescope Type: {classify}
          </span>
          <span
            className="ms-2 text-muted"
            style={{
              fontFamily: "Roboto, serif",
            }}
          >
            Seller: {seller}
          </span>
          <span
            style={{
              fontFamily: "Roboto, serif",
            }}
            className="ms-2 text-muted"
          >
            {formatCurrency(price)}
          </span>
        </div>
        <Divider style={{ marginTop: "5px", padding: 0 }} />
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
