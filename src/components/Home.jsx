import React from "react";
import ProductCart from "./ProductCart";
import plus14 from "../assets/14plus.png";
import pro14 from "../assets/14pro.png";
import promax128 from "../assets/14promax128.png";
import promax256 from "../assets/14promax256.png";
import promax512 from "../assets/14promax512.png";
import iphone13 from "../assets/iphone13.png";
import { toast } from "react-hot-toast";

const Home = () => {
  const addToCartHandler = (options) => {
    console.log(options);
    toast.success("Added To Cart");
  };
  const productList = [
    {
      name: "iphone 14 pro max",
      price: "191,990  (128GB)",
      img: promax128,
      id: "1",
    },
    {
      name: "iphone 14 pro max",
      price: " 210,990 (256GB)",
      img: promax256,
      id: "2",
    },
    {
      name: "iphone 14 pro max",
      price: " 247,990 (512GB)",
      img: promax512,
      id: "3",
    },
    {
      name: "iphone 14 pro",
      price: " 191,990 (256GB)",
      img: pro14,
      id: "4",
    },
    {
      name: "iPhone 14 Plus",
      price: " 157,990 (128GB)",
      img: plus14,
      id: "5",
    },
    {
      name: "iPhone 13",
      price: " 119,990 (128GB)",
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
