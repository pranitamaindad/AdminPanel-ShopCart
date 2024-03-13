import React from "react";
import Catagories from "./Catagories";
import { Route, Routes } from "react-router-dom";
import MainCategary from "./MainCategary";
import SubCategary from "./SubCategary";

export default function Categary() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Catagories></Catagories>}></Route>
        <Route path="/maincatagary" Component={MainCategary}></Route>
        <Route path="/subcatagary" Component={SubCategary} ></Route>
      </Routes>
    </div>
  );
}
