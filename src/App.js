import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, News, CryptoList, CryptoDetail, NotFound } from "./pages/index";
import { getJSON } from "./api/crypto";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cryptocurrency" element={<CryptoList />} />
        <Route
          path="/cryptocurrency/:cryptodetail"
          element={<CryptoDetail />}
        />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
