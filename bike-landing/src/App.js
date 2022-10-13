import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cadastro } from "./pages/Cadastro";
import { GlobalStyle } from "./GlobalStyles";
import { Menu } from "./pages/Menu";
import { Estacoes } from "./pages/Estacoes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/estacoes" element={<Estacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
