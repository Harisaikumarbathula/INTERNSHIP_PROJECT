import React from "react";
import Navbar from "./navbar.jsx";
import Form from "./form.jsx";
import styled from "styled-components";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="app"  >
      <Navbar />
      <div className="form-container">
      <Form />
      </div>
    </div>
    </>
  )
}

export default App;