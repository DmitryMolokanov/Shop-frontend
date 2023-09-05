import React from "react";

import ProductImg from "./ProductImg";
import ProductDiscription from "./ProductDiscription";
import OrderBlock from "./OrderBlock";

function ProductOrder(props) {
  return (
    <div>
      <div className="back-button-container">
        <a href="/" className="back-button">
          Go back
        </a>
      </div>
      <div className="product-card">
        <ProductImg selectedProduct={props.selectedProduct} />
        <ProductDiscription selectedProduct={props.selectedProduct} />
        <OrderBlock selectedProduct={props.selectedProduct} />
      </div>
    </div>
  );
}

export default ProductOrder;
