import React, { useEffect, useState } from "react";

function SelectQty(props) {
  const [products, setProducts] = useState();

  useEffect(() => {
    if (Array.isArray(props.products)) {
      setProducts(props.products);
    }
  }, [props]);

  return (
    <div className="order">
      <label>
        Quantity:
        <select
          className="select-qty"
          value={props.value}
          onChange={(e) => {
            const totalQty = Number(e.target.value);
            const result = products.map((prod) => {
              if (prod.id === props.item.id) {
                prod.qty = totalQty;
                prod.total_amount = parseInt(prod.cost);
                prod.total_amount = prod.total_amount * totalQty;
                return prod;
              } else return prod;
            });
            localStorage.setItem("cart", JSON.stringify(result));
            props.getCHangedQty(result);
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
