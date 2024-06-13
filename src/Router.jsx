import { Routes, Route } from "react-router-dom"
import { DiscoverArea } from "./pages/DiscoverArea"
import { Home } from "./pages/Home"
import { Course } from "./pages/Course"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { University } from "./pages/University"
import { Area } from "./pages/Area"
import Level from "./pages/Level"
import { Library } from "./pages/Library"
import { ToDoList } from "./pages/ToDoList"

export const AppRouter = () => {
    return (
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:uni_id" element={<University />}></Route>
        <Route path="/home/:uni_id/area" element={<DiscoverArea/>}></Route>
        <Route path="/home/:uni_id/:area_id" element={<Area/>}></Route>
        <Route path="/home/:uni_id/:area_id/:course_id" element={<Course/>}></Route>
        <Route path="/home/:uni_id/:area_id/:course_id/:theme_id/:level_id" element={<Level/>}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
      </Routes>
    )
  }