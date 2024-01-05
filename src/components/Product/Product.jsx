import React from "react";
import "./Product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  console.log(props);
  const { img, name, price, seller, ratings } = props.product;
  const handelAddToCart = props.handelAddToCart;

  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price:${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handelAddToCart(props.product)}
      >
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
