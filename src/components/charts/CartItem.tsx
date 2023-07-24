import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import storeItems from "../../data/items.json"
import { formatCurrency } from "../../utilities/formatCurrency"
import { useState, useEffect } from "react"
import { getAllProduct } from "../../service/product/product"
import { fallBackImage } from "../../utilities/properties"
import { Image } from "antd"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const [product, setProduct] = useState<any[]>([]);

  useEffect(()=>{
    loadProduct();
  },[])
  
  const loadProduct = async () => {
    const result = await getAllProduct();
    if (result) {
      setProduct(result.resultData)
      console.log(result);
      // const newData = result.resultData.map(async (item: any) => {
      //   // Convert image to base64
      //   if (item.image && item.image instanceof Blob) {
      //     const reader = new FileReader();
      //     reader.onloadend = () => {
      //       item = {
      //         ...item,
      //         image: reader.result // Store the base64 image
      //       };
      //       console.log(item);
      //       setProduct(prevProduct => [...prevProduct, item]); // Add the updated item to the product state
      //     };
      //     reader.readAsDataURL(item.image);
      //   }
      //   return item;
      // });
  
      // // Wait for all image conversions to complete
      // await Promise.all(newData);
  
      // // Set product state with the fetched data
      // setProduct(result.resultData);
    }
  };

  const item = product.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <Image
        src={`data:image/jpeg;base64,${item.image}`}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        fallback={fallBackImage}
      />
      <div className="me-auto">
        <div>
          {item.productName}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}
