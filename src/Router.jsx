import { Routes, Route } from "react-router-dom"
import { Area } from "./pages/Area"
import { Home } from "./pages/Home"
import { Language } from "./pages/Language_A"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Unmsm } from "./pages/Unmsm"

export const AppRouter = () => {
    return (
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/language" element={<Language />}></Route>
        <Route path="/unmsm" element={<Unmsm />}></Route>
        <Route path="/area" element={<Area/>}></Route>
      </Routes>
    )
  }