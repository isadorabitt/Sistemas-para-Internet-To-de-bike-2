import React from "react";
import { Carrousel } from "./Carrousel";
import "./Station.css";

export const NearStations = () => {
  return (
    <div className="mainContainer">
      <h1>Estações próximas</h1>
      <Carrousel />
      <h2>Não encontrou as estações que procura?</h2>
      <button>Mais estações</button>
    </div>
  );
};
