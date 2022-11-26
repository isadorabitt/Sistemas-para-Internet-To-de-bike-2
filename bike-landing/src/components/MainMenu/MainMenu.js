import React from "react";
import styles from "./CSSModule/MainMenu.module.css";

export const MainMenu = () => {
    return (
        <div className={styles.mainmenuContainer}>
            <h1>Viagens</h1>
            <h2>Atividades</h2>
            <p>Tudo pronto para começar a pedalar?</p>
            <h7>Escolha seu plano ideal e aproveite!</h7>
            <br></br>
            <button>Planos e Pagamentos</button>
        </div>
    );
};