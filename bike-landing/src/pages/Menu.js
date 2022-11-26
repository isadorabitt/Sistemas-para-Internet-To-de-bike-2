import React from "react";
import { Footer } from "../components/MainMenu/Footer";
import { SideBar } from "../components/MainMenu/SideBar";
import { MainMenu } from "../components/MainMenu/MainMenu";

export const Menu = () => {
  return (
    <div>
      <SideBar />
      <Footer />
      <MainMenu/>
    </div>
  );
};
