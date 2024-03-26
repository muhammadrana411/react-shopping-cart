/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { fetchProducts } from "./productApi";
import Product from "./product";
import "./shop.css";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  return products;
}

function shop(props) {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>React Shop</h1>
      </div>
      <div className="products">
        {useProducts().map((product) => {
          return (
            <Product
              key={product.id}
              data={product}
              addToCart={props.setProducts}
            />
          );
        })}
      </div>
    </div>
  );
}
export default shop;
