import React from "react";

function ProductOrder(props) {
  return (
    <div>
      <div className="back-button-container">
        <a href="/" className="back-button">
          Go back
        </a>
      </div>
      <div className="product-card">
        <div className="product-card-img">
          <img
            src={props.selectedProduct.img[0]}
            alt={props.selectedProduct.name}
            className="img-product"
          />
        </div>
        <div className="product-card-discription">
          <div className="title-product">{props.selectedProduct.name}</div>
          <hr />
          <div className="cost-product">
            Price: {props.selectedProduct.cost}
          </div>
          <hr />
          <div className="discription-product-card">
            {props.selectedProduct.discription}
          </div>
        </div>
        <div className="order-block">
          <div className="order">Price: {props.selectedProduct.cost}</div>
          <div className="order">
            Quantity:{" "}
            <select className="select-qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="order-btn">
            <button className="btn-add-cart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOrder;
