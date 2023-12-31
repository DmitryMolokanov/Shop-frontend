import React from "react";
import { useParams } from "react-router-dom";
import MainMenu from "../components/UI/MainPage/MainMenu";
import ProductOrder from "../components/UI/ProductPage/ProductOrder";
import products from "../products/products";
import "../styles/ProductPage.css";

function ProductPage() {
  const params = useParams();
  const selectedProduct = products.find((item) => {
    return item.id === Number(params.id);
  });

  return (
    <div className="product-page-main">
      <MainMenu />
      <ProductOrder selectedProduct={selectedProduct} />
    </div>
  );
}

export default ProductPage;
