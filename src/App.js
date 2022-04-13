/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/press" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
