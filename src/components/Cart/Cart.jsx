import React from "react";
import "./Cart.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, handleClearCart, children }) => {
  //   const { cart } = props.cart;
  //   console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  let tax = (total * 7) / 100;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart-container2">
      <h4>Order Summary </h4>
      <div>
        <h5>Selected Quantity: {quantity}</h5>
        <p>Total Price: ${total}</p>
        <p>Shipping: ${shipping} </p>
        <p>Tax: ${tax.toFixed(2)} </p>
        <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        <button onClick={handleClearCart} className="btn-clear-cart">
          Clear Cart <FontAwesomeIcon icon={faTrashAlt} />{" "}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
