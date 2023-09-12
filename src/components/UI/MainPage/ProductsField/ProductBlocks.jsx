import React from "react";

function ProductBlocks(props) {
  return (
    <div className="products-field">
      {props.selectionProduct.map((item, index) => {
        return (
          <div key={index} className="product-block">
            <div className="img-products-block">
              <a href={`/product/${item.id}`}>
                <img
                  src={item.img[0]}
                  alt={item.name}
                  className="product-img"
                />
              </a>
            </div>
            <div className="title-block">{item.name}</div>
            <div className="price-block">{item.cost}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductBlocks;
