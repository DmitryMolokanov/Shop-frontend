import React from "react";

function NewCustomer() {
  return (
    <label style={{ marginTop: "20px", color: " rgb(107, 107, 107) " }}>
      New customer?
      <a href="/registration" className="register-link">
        Registration
      </a>
    </label>
  );
}

export default NewCustomer;
