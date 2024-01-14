import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, name, price, img, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-info">
        <h6 className="item-title">{name}</h6>
        <p>
          Price: <span className="orange-color">${price}</span>
        </p>
        <p>
          Quantity: <span className="orange-color">${quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className="btn-delete">
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>{" "}
      </button>
    </div>
  );
};

export default ReviewItem;
