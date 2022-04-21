import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import TaskFunc from "./components/TaskFunc";
import TaskClass from "./components/TaskClass";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskFunc" element={<TaskFunc />} />
        <Route path="/taskClass" element={<TaskClass />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
