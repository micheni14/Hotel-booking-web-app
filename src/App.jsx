import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amenities" element={<Hotels />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
