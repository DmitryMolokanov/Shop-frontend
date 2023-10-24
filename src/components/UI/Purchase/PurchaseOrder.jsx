import React from "react";

function PurchaseOrder(props) {
  const cardProducts = props.products.cartProducts || [];
  return (
    <div className="purchase-orger-container">
      <div className="purchase-orger-title">
        <span>Products list</span>
      </div>
      {cardProducts.map((prod) => {
        return (
          <ul key={prod.id}>
            <div className="purchase-orger-li">
              <li>{prod.name}</li>
              <div className="purchase-orger-img-container">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="purchase-orger-img"
                />
              </div>
            </div>
          </ul>
        );
      })}
      <div className="total-cost">Total cost: {props.getTotalCost()}$</div>
    </div>
  );
}

export default PurchaseOrder;
