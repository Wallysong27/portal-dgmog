import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import QuemSomos from "../pages/aboutUs";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </BrowserRouter>
  );
}
