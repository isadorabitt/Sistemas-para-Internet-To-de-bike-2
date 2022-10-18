import React from "react";
import styles from './CSSModule/registerText.module.css';
import logo from "../../assets/images/logo.png";

export const RegisterText = () => {
    return (
      <div className={styles.main}>
        
          <img src={logo} />
          <p>Olá. Seja Bem-vindo! <br/>
            Complete os campos ao lado para criar a sua conta. </p>
          <p>Já tem cadastro? <a>Entrar.</a></p>
      </div>
    )
  }