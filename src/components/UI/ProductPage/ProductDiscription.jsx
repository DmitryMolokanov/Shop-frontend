import React from "react";

function ProductDiscription(props) {
  return (
    <div className="product-card-discription">
      <div className="title-product">{props.selectedProduct.name}</div>
      <hr />
      <div className="cost-product">Price: {props.selectedProduct.cost}</div>
      <hr />
      <div className="discription-product-card">
        {props.selectedProduct.discription}
      </div>
    </div>
  );
}

export default ProductDiscription;
