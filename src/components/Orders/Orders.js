import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { savedCart } = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const deleteFromCartHandler = (id) => {
    setCart((prevCart) => {
      const existingCart = [...prevCart];
      const newCart = existingCart.filter((cartItem) => cartItem.id !== id);
      return newCart;
    });

    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            onDeleteFromCart={deleteFromCartHandler}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
