import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({ type: "deleteFromCart", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              qty={item.quantity}
              id={item.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No items yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:NPR {subTotal}</h2>
        <h2>Shipping:NPR {shipping}</h2>
        <h2>Tax:NPR {tax}</h2>
        <h2>Total:NPR {total}</h2>
      </aside>
    </div>
  );
};

export default Cart;
