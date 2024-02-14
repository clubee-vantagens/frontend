import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
