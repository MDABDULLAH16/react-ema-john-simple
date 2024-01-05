import { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //load data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //add to cart
  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="main-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h3>summary hare{cart.length}</h3>
      </div>
    </div>
  );
};

export default Products;
