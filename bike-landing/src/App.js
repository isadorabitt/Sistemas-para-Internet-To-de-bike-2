import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./GlobalStyles";
import { Menu } from "./pages/Menu";
import { Station } from "./pages/Station";
import { Wallet } from "./pages/Wallet";
import { Bikes } from "./pages/Bikes";
import { Help } from "./pages/Help";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/estacoes" element={<Station />} />
        <Route path="/menu/carteira" element={<Wallet />} />
        <Route path="/menu/bikes" element={<Bikes />} />
        <Route path="/menu/Ajuda" element={<Help />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
