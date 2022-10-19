import React from "react";
import styles from "./CSSModule/Sidebar.module.css";
import Logo from "./../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import { hpMenuData, mainMenuData } from "../../data/menuData.js";

export const SideBar = () => {
  return (
    <div className={styles.sideContainer}>
      <nav className={styles.navMenu}>
        <img className={styles.logo} src={Logo} alt="Logo Tô de Bike" />
        {mainMenuData.map((item, index) => (
          <NavLink to={item.link} key={index} end>
            {item.title}
          </NavLink>
        ))}
      </nav>
      <nav className={styles.npNavMenu}>
        {hpMenuData.map((item, index) => (
          <NavLink to={item.link} key={index} end>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
