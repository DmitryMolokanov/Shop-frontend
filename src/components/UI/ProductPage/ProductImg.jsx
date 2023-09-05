import React from "react";

function ProductImg(props) {
  return (
    <div className="product-card-img">
      <img
        src={props.selectedProduct.img[0]}
        alt={props.selectedProduct.name}
        className="img-product"
      />
    </div>
  );
}

export default ProductImg;
