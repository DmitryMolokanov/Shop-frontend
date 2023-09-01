import React, { useEffect, useState } from "react";
import Pointer from "./UI/Carousel/Pointer";
import Picture from "./UI/Carousel/Picture";
import "../styles/Carousel.css";
import Discription from "./UI/Carousel/Discription";

function Carousel(props) {
  const [index, setIndex] = useState(0);

  function autoSlide() {
    index <= 3 ? setIndex(index + 1) : setIndex(0);
  }

  function slideRigth(index) {
    setIndex(index);
  }
  function slideLeft(index) {
    setIndex(index);
  }

  function getIndex(index) {
    setIndex(index);
  }

  // useEffect(() => {
  //   const slideImg = setInterval(() => {
  //     console.log(index);
  //     autoSlide();
  //   }, 5000);
  //   return () => clearInterval(slideImg);
  // });

  return (
    <div className="carousel-container">
      <div className="inner-container">
        <Picture
          products={props.products}
          index={index}
          slideLeft={slideLeft}
        />
        <Discription
          index={index}
          products={props.products}
          slideRigth={slideRigth}
        />
      </div>
      <Pointer index={index} products={props.products} getIndex={getIndex} />
    </div>
  );
}

export default Carousel;
