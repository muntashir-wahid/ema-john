import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./ReviewItem.css";

const ReviewItem = ({ product, onDeleteFromCart }) => {
  const { id, name, price, quantity, img } = product;
  const deleteFromCartHandler = () => {
    onDeleteFromCart(id);
  };
  return (
    <div className="review-item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>
            <small>Product Name: {name}</small>
          </p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button className="btn-delete" onClick={deleteFromCartHandler}>
            <FontAwesomeIcon fontSize="31" color="#EB5757" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
