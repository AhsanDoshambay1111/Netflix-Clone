import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';

function App() {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  </Router>
  </>
  )
}

export default App
