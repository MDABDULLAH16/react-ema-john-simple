import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const { cart } = props.cart;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = (total * 7) / 100;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart-container2">
      <h4>Order Summary </h4>
      <div>
        <h5>Selected Quantity: {cart.length}</h5>
        <p>Total Price: ${total}</p>
        <p>Shipping: ${shipping} </p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default Cart;
