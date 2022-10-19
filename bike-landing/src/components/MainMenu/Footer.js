import React from "react";
import styles from "./CSSModule/Footer.module.css";
import Decoration from "../../assets/images/Decoration.png";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>Copyright 2022 © Tô de Bike</p>
      <img
        className={styles.decoration}
        src={Decoration}
        alt="Imagem de decoração"
      />
    </footer>
  );
};
