/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import ShopContext from "../../context/shopContext";

function Product(props) {
  let { id, title, price, image } = props.data;
  let { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          {cartItems && cartItems[id] && cartItems[id].quantity > 0 ? (
            <>Add to Cart ({cartItems[id].quantity})</>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  );
}

export default Product;
