import React from "react";
import CartItem from "./CartItem";
import plus14 from "../assets/14plus.png";
import pro14 from "../assets/14pro.png";
import promax128 from "../assets/14promax128.png";
import promax256 from "../assets/14promax256.png";
import promax512 from "../assets/14promax512.png";
import iphone13 from "../assets/iphone13.png";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          imgSrc={promax128}
          name={"iphone 14 pro max(128GB)"}
          price={"191, 990"}
          qty={"1"}
          id={"1"}
        />
      </main>
      <aside>
        <h2>Subtotal:NPR{2000}</h2>
        <h2>Shipping:NPR{200}</h2>
        <h2>Tax:NPR{20}</h2>
        <h2>Total:${1220}</h2>
      </aside>
    </div>
  );
};

export default Cart;
