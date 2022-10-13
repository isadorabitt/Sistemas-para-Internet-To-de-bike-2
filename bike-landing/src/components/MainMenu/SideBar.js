import React from "react";
import styles from "./CSSModule/Sidebar.module.css";
import Logo from "./../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import { mainMenuData } from "../../data/menuData.js";

export const SideBar = () => {
  return (
    <div className={styles.sideContainer}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <nav className={styles.navMenu}>
        {mainMenuData.map((item, index) => (
          <NavLink to={item.link} key={index} end>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
