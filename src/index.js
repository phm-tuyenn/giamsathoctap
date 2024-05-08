import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import reportWebVitals from './reportWebVitals';
import "./assets/style.css"
import "holderjs"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import Home from "./pages/Home"
import About from "./pages/About"
import Donate from "./pages/Donate"
import Error404 from "./Error404"

import Post1 from "./pages/post/bot-vex-iq-2023-2024"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="donate" element={<Donate/>}></Route>
        <Route path="post">
          <Route path="" element={<Navigate to="/" replace/>}/>
          <Route path='bot-vex-iq-2023-2024' element={<Post1/>}></Route>
        </Route>
        <Route path="*" element={<Error404/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
