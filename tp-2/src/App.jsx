// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CreateProductScreen from "./Screens/CreateProductScreen/CreateProductScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/product/new" element={<CreateProductScreen />} />
    </Routes>
  );
}
