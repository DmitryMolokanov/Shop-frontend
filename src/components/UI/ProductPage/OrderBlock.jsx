import React from "react";
import SelectQty from "./SelectQty";
import { useNavigate } from "react-router-dom";

function OrderBlock(props) {
  const navigate = useNavigate();
  return (
    <div className="order-block">
      <div className="order">Price: {props.selectedProduct.cost}</div>
      <SelectQty />
      <div className="order-btn">
        <button
          className="btn-add-cart"
          onClick={() => {
            const getProducts = JSON.parse(localStorage.getItem("cart"));
            const products = {
              id: props.selectedProduct.id,
              name: props.selectedProduct.name,
              cost: props.selectedProduct.cost,
              img: props.selectedProduct.img[0],
              qty: 1,
            };

            let productArr = [];
            if (Array.isArray(getProducts)) {
              for (let value of getProducts) {
                if (value.id === products.id) {
                  navigate("/cart");
                  return;
                }
              }
              productArr = [...getProducts, products];
            } else productArr = [products];
            localStorage.setItem("cart", JSON.stringify(productArr));
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default OrderBlock;
