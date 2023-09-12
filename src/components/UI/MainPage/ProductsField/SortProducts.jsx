import React, { useState } from "react";

function SortProducts(props) {
  const [showSort, setShowSort] = useState(false);

  function showSortButton() {
    setShowSort((current) => !current);
  }

  function sortByName() {
    const sort = [...props.selectionProduct].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    props.sortProducts(sort);
  }

  function sortByExpensive() {
    const sort = [...props.selectionProduct].sort(
      (a, b) => parseInt(b.cost) - parseInt(a.cost)
    );
    props.sortProducts(sort);
  }

  function sortByCheaper() {
    const sort = [...props.selectionProduct].sort(
      (a, b) => parseInt(a.cost) - parseInt(b.cost)
    );
    props.sortProducts(sort);
  }
  return (
    <div className="products-field-select">
      <button className="products-field-btn" onClick={showSortButton}>
        Sort products
      </button>
      <div>
        <ul
          className="products-field-ul"
          style={showSort ? { display: "block" } : { display: "none" }}
        >
          <button className="products-field-li" onClick={sortByExpensive}>
            expensive
          </button>
          <button className="products-field-li" onClick={sortByCheaper}>
            cheaper
          </button>
          <button className="products-field-li" onClick={sortByName}>
            by name
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SortProducts;
