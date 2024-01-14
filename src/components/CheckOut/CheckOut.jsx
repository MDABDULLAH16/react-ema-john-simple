// Checkout.js
import React from "react";
import "./CheckOut.css"; // Import the CSS file

const CheckOut = () => {
  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>
      <div className="checkout-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="address">Address:</label>
        <textarea id="address" placeholder="Enter your address"></textarea>

        <label htmlFor="card">Credit Card:</label>
        <input
          type="text"
          id="card"
          placeholder="Enter your credit card number"
        />

        <button className="checkout-button">Complete Purchase</button>
      </div>
    </div>
  );
};

export default CheckOut;
