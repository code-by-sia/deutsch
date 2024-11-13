import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/index";
import PracticePage from "./pages/practice";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/test" element={<PracticePage />} />
      </Routes>
    </BrowserRouter>
  );
}
