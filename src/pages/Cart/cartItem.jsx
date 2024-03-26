import { useContext } from "react";
import ShopContext from "../../context/shopContext";

function CartItem(props) {
  let { id, title, price, category, image } = props.data || {};

  let { addToCart, removeFromCart, updateCartItems } = useContext(ShopContext);

  return (
    <div className="cartItem">
      {id && (
        <>
          <img src={image} />
          <div className="description">
            <p>
              <b>{title}</b>
            </p>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Quantity: {props.quantity} </p>
            <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={props.quantity}
                onChange={(e) => updateCartItems(Number(e.target.value), id)}
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
