/* eslint-disable no-unused-vars */
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router";
import { Home, About, Products, Cart, Notfound } from "./pages";

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
