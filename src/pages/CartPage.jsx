import { React } from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import "../styles/CartPage.css";
import CartProductBlock from "../components/UI/CartPage/CartProductBlock";
import SendResult from "../components/UI/CartPage/SendResult";

function CartPage(props) {
  return (
    <div className="cart-page">
      <MainMenu /> <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-product-block">
        <CartProductBlock />
        <SendResult cartProducts={props.cartProducts} />
      </div>
    </div>
  );
}

export default CartPage;
