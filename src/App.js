import Header from "./components/Header"
import { useState } from "react"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Detail from "./pages/Detail"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




















