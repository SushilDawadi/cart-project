import React from "react";
import ProductCart from "./ProductCart";
import plus14 from "../assets/14plus.png";
import pro14 from "../assets/14pro.png";
import promax128 from "../assets/14promax128.png";
import promax256 from "../assets/14promax256.png";
import promax512 from "../assets/14promax512.png";
import iphone13 from "../assets/iphone13.png";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  const productList = [
    {
      name: "iphone 14 pro max(128GB)",
      price: "191990",
      img: promax128,
      id: "1",
    },
    {
      name: "iphone 14 pro max (256GB)",
      price: "210990",
      img: promax256,
      id: "2",
    },
    {
      name: "iphone 14 pro max (512GB)",
      price: "247990",
      img: promax512,
      id: "3",
    },
    {
      name: "iphone 14 pro (256GB)",
      price: "191990",
      img: pro14,
      id: "4",
    },
    {
      name: "iPhone 14 Plus (128GB)",
      price: "157990",
      img: plus14,
      id: "5",
    },
    {
      name: "iPhone 13 (128GB)",
      price: "119990",
      img: iphone13,
      id: "6",
    },
  ];

  return (
    <div className="home">
      {productList.map((item, index) => (
        <ProductCart
          key={index}
          id={item.id}
          name={item.name}
          imgSrc={item.img}
          price={item.price}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
