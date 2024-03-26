/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { fetchProducts } from "../pages/Shop/productApi";

let ShopContext = createContext(null);

let getDefaultCart = async () => {
  let cart = {};
  let fetchedProducts = await fetchProducts();
  if (Array.isArray(fetchedProducts)) {
    fetchedProducts.forEach((product) => {
      cart[product.id] = 0;
    });
  }
  return cart;
};

export let ShopContextProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState(getDefaultCart());

  let getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = fetchProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  let addToCart = (itemId, data) => {
    if (cartItems[itemId] === undefined) {
      setCartItems((prev) => ({ ...prev, [itemId]: { ...data, quantity: 1 } }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: { ...prev[itemId], quantity: prev[itemId].quantity + 1 },
      }));
    }
  };

  let removeFromCart = (itemId, data) => {
    if (cartItems[itemId] === undefined) {
      setCartItems((prev) => ({ ...prev, [itemId]: { ...data, quantity: 1 } }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: { ...prev[itemId], quantity: prev[itemId].quantity - 1 },
      }));
    }
  };

  let updateCartItems = function (newAmount, itemId) {
    if (newAmount > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: { ...prev[itemId], quantity: newAmount },
      }));
    }
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItems,
        getTotalCartAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
