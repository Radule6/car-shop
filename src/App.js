import "./App.css";
import { useState } from "react";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import BuyCar from "./BuyCar/BuyCar";
import Footer from "./components/Footer/Footer";

function App() {
  const [car, setCar] = useState([]);

  const handleClick = (carId) => {
    console.log(carId);
    setCar(car);
  };

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/car/:id" element={<BuyCar />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
