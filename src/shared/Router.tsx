import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cafe from "../pages/Cafe";
import Alcohol from "../pages/Alcohol";
import Restaurant from "../pages/Restaurant";

//라우터 추가는 여기서 하면됨

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
