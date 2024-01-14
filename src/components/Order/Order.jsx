import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  // console.log(savedCart);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkOut");
  };
  return (
    <div className="main-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <div>
            <button onClick={handleCheckOut} className="btn-cheek-out">
              Cheek Out
            </button>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
