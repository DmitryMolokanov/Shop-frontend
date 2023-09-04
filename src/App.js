import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<h1>There is product</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
