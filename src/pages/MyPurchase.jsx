import React, { useEffect, useState } from "react";
import MainMenu from "../components/UI/MainPage/MainMenu";
import "../styles/MyPurchases.css";
import getConvenientDate from "../utils/form-helper/getConvenientDate";

function MyPurchase() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [allPurchases, setAllPurchases] = useState();
  console.log("state");

  useEffect(() => {
    async function getUserPurchase() {
      const userEmail = { email: user.email };
      const response = await fetch("user/get_all_purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userEmail),
      });
      const result = await response.json();
      setAllPurchases(result);
    }
    getUserPurchase();
  }, []);

  function descendingSum() {
    const descendingSum = [...allPurchases].sort(
      (a, b) => b.total_amount - a.total_amount
    );
    setAllPurchases(descendingSum);
  }
  function increasingSum() {
    const descendingSum = [...allPurchases].sort(
      (a, b) => a.total_amount - b.total_amount
    );
    setAllPurchases(descendingSum);
  }
  function erlier() {
    const descendingDate = [...allPurchases].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setAllPurchases(descendingDate);
  }
  function later() {
    const descendingDate = [...allPurchases].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setAllPurchases(descendingDate);
  }

  return (
    <div>
      <MainMenu />
      <h1 className="title-products-field">Your purchases for all time</h1>

      <div className="table-container">
        <div className="table-selector-container">
          <button onClick={descendingSum} className="table-select">
            descending sum
          </button>
          <button onClick={increasingSum} className="table-select">
            increasing sum
          </button>
          <button onClick={erlier} className="table-select">
            erlier
          </button>
          <button onClick={later} className="table-select">
            later
          </button>
        </div>
        {allPurchases ? (
          <table className="purchase-table">
            <thead>
              <tr className="purchase-thead">
                <th className="purchase-thead-th">Purchase</th>
                <th className="purchase-thead-th">Sum</th>
                <th className="purchase-thead-th">Date</th>
              </tr>
            </thead>
            <tbody>
              {allPurchases.map((purchases, index) => {
                return (
                  <tr className="purchases-table-tr" key={index}>
                    {purchases.products.map((prod, index) => {
                      return (
                        <td className="purchases-table-td" key={index}>
                          {prod.name}
                        </td>
                      );
                    })}
                    <td className="purchases-table-td-sum">
                      {purchases.total_amount}$
                    </td>
                    <td className="purchases-table-td-date">
                      {getConvenientDate(purchases.date)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default MyPurchase;
