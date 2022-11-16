import React from "react";
import { Footer } from "../components/MainMenu/Footer";
import { SideBar } from "../components/MainMenu/SideBar";
import { QRScanner } from "../components/MainMenu/QRScanner";

export const Bikes = () => {
  return (
    <div>
      <SideBar />
      <Footer />
      <QRScanner />
    </div>
  );
};
