import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductCart = ({ id, name, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>NPR{price}</h4>
    <button onClick={() => handler({ id, name, price, quantity: 1, imgSrc })}>
      <AiOutlineShoppingCart className="cartIcon" /> Add to Cart
    </button>
  </div>
);

export default ProductCart;
