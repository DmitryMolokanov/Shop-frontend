import React, { useEffect, useState } from "react";
import Pointer from "../Carousel/Pointer";
import Picture from "../Carousel/Picture";
import "../../../styles/Carousel.css";
import Discription from "../Carousel/Discription";

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

  useEffect(() => {
    const slideImg = setInterval(() => {
      autoSlide();
    }, 5000);
    return () => clearInterval(slideImg);
  });

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
