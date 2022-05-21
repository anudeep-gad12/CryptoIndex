import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, News, CryptoList } from "./pages/index";
import { getJSON } from "./api/crypto";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cryptocurrency" element={<CryptoList />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
