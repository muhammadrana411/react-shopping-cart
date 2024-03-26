import ShopContext from "../../context/shopContext";
import { useContext } from "react";
import { useProducts } from "../Shop/shop";
import CartItem from "./cartItem";
import "./cart.css";

function Cart() {
  let { cartItems } = useContext(ShopContext);
  const products = useProducts();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] && cartItems[product.id].quantity > 0) {
            return (
              <CartItem
                key={product.id}
                data={product}
                quantity={cartItems[product.id].quantity}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
