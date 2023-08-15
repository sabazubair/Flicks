import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home.js";
import Nominations from "../Nominations.js";

export default function Router({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nominations" element={<Nominations />} />
    </Routes>
  );
}
