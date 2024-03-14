import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Details from "./pages/Details";
import Table from "./components/Table";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amenities" element={<Hotels />} />
          <Route path="/details" element={<Details />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
