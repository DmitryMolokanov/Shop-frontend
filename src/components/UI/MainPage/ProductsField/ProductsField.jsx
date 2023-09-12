import React, { useState } from "react";
import SortProducts from "./SortProducts";
import ProductBlocks from "./ProductBlocks";

function ProductsField(props) {
  const [selectionProduct, setsSelectionProduct] = useState(props.products);

  function sortProducts(sortArr) {
    setsSelectionProduct(sortArr);
  }

  return (
    <div className="products-field-block">
      <h1 className="title-products-field">Our products</h1>
      <SortProducts
        selectionProduct={selectionProduct}
        sortProducts={sortProducts}
      />
      <ProductBlocks selectionProduct={selectionProduct} />
    </div>
  );
}

export default ProductsField;
