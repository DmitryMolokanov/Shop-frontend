import React from "react";

function ProductsField(props) {
  return (
    <div className="products-field-block">
      <h1 className="title-products-field">Our products</h1>
      <div className="products-field">
        {props.products.map((item, index) => {
          return (
            <div key={index} className="product-block">
              <div className="img-products-block">
                <img
                  src={item.img[0]}
                  alt={item.name}
                  className="product-img"
                />
              </div>
              <div className="title-block">{item.name}</div>
              <div className="price-block">{item.cost}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsField;
