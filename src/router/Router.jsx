import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import SignupUsuario from "../pages/signup/SignupUsuario";
import Termos from "../pages/termos/termos";
import SignupEmpresa from "../pages/signup/SignUpEmpresa";
import PaginaInicial from "../components/PaginaInicial";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/usuario" element={<SignupUsuario />} />
        <Route path="/signup/empresa" element={<SignupEmpresa />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>
    </BrowserRouter>
  );
}
