import React from "react";
import { Footer } from "../components/MainMenu/Footer";
import { SideBar } from "../components/MainMenu/SideBar";
import { NearStations } from "../components/Stations/NearStations";

export const Station = () => {
  return (
    <>
      <SideBar />
      <NearStations />
    </>
  );
};
