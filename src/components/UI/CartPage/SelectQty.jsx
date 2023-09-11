import { React, useContext } from "react";
import { CartContext } from "../../../constext/context";

function SelectQty(props) {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  function selectOnChange(e) {
    const totalQty = Number(e.target.value);
    const result = cartProducts.map((prod) => {
      if (prod.id === props.item.id) {
        prod.qty = totalQty;
        prod.total_amount = parseInt(prod.cost);
        prod.total_amount = prod.total_amount * totalQty;
        return prod;
      } else return prod;
    });
    localStorage.setItem("cart", JSON.stringify(result));
    setCartProducts(result);
  }
  return (
    <div className="order">
      <label>
        Quantity:
        <select
          className="select-qty"
          value={props.item.qty}
          onChange={(e) => {
            selectOnChange(e);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
    </div>
  );
}

export default SelectQty;
