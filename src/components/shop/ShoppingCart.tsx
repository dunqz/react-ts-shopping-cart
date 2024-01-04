import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "../charts/CartItem";
import storeItems from "../../data/items.json";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../service/product/product";
import { Button } from "antd";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, clearCart } = useShoppingCart();
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await getAllProduct();
    if (result) {
      setProduct(result.resultData);
    }
  };

  const handleBuyClick = async ()=>{
    try {
      
      alert('Purchase successful! Thank you for shopping!');
      clearCart();

    } catch (error) {
      console.error('Error completing purchase:', error);
    }
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = product.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <Button onClick={handleBuyClick}>BUY</Button> 
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
