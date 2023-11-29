import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

const Admin = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/admin/dashboard" element=<DashBoard /> />
        <Route path="/admin/restaurants" element=<CategoryPage /> />
      </BrowserRouter>
    </>
  );
};

export default adminPage;
