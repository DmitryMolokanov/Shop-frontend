import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../constext/context";

function OrderBlock(props) {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <div className="order-block">
      <div className="order">Price: {props.selectedProduct.cost}</div>
      <div className="order-btn">
        <button
          className="btn-add-cart"
          onClick={() => {
            const products = {
              id: props.selectedProduct.id,
              name: props.selectedProduct.name,
              cost: props.selectedProduct.cost,
              total_amount: props.selectedProduct.total_amount,
              img: props.selectedProduct.img[0],
              qty: cartProducts > 0 ? cartProducts.qty : 1,
            };

            let productArr = [];
            if (Array.isArray(cartProducts)) {
              for (let value of cartProducts) {
                if (value.id === products.id) {
                  navigate("/cart");
                  return;
                }
              }
              productArr = [...cartProducts, products];
            } else productArr = [products];
            localStorage.setItem("cart", JSON.stringify(productArr));
            setCartProducts(productArr);
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
