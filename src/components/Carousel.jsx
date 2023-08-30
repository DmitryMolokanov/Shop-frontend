import React, { useEffect, useState } from "react";
import "../styles/Carousel.css";

function Carousel(props) {
  const [index, setIndex] = useState(0);
  function slideRigth() {
    index <= 3 ? setIndex(index + 1) : setIndex(0);
  }
  function slideLeft() {
    index >= 1 ? setIndex(index - 1) : setIndex(4);
  }

  // useEffect(() => {
  //   const slideImg = setInterval(() => {
  //     slideRigth();
  //   }, 1000);
  //   return () => clearInterval(slideImg);
  // });

  return (
    <div className="carousel-container">
      <div className="inner-container">
        <div className="img-block">
          <img src={props.products[`${index}`].img[0]} alt="" className="img" />
          <button className="leftArrow" onClick={slideLeft}>
            {"<"}
          </button>
        </div>
        <div className="discription-block">
          <button className="rightArrow" onClick={slideRigth}>
            {">"}
          </button>
        </div>
      </div>
      <div className="pointer-block">
        {props.products.map((qty, index) => (
          <button key={index} className="pointer-btn"></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
