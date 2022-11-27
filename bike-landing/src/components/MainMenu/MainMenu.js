import React from "react";
import styles from "./CSSModule/MainMenu.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slides.css";

import img1 from "../../assets/images/Viagem1.jpeg";
import img2 from "../../assets/images/Viagem2.jpeg";
import img3 from "../../assets/images/Viagem3.jpeg";
import img4 from "../../assets/images/Viagem4.jpeg";
import img5 from "../../assets/images/Meta1.PNG";
import img6 from "../../assets/images/Meta2.PNG";
import img7 from "../../assets/images/Grafico.PNG";

export const MainMenu = () => {
    return (
        <div className={styles.mainmenuContainer}>
            <h1>Viagens</h1>
            <div className="containerCarrossel">
                <Carousel className="carroseelmainMenu">
                <div>
                <img src={img1}/>
                </div>
                <div>
                <img src={img2}/>
                </div>
                <div>
                <img src={img3}/>
                </div>
                <div>
                <img src={img4}/>
                </div>
                </Carousel>
            </div>
            <h2>Metas do mês</h2>
            <div className="containerCarrossel1">
                <Carousel className="carroseelmainMenu1">
                <div>
                <img src={img5}/>
                </div>
                <div>
                <img src={img6}/>
                </div>
                </Carousel>
                <div className="item">
                <img src={img7}/>
                </div>
            </div>
            <p>Tudo pronto para começar a pedalar?</p>
            <h7>Escolha seu plano ideal e aproveite!</h7>
            <br></br>
            <button>Planos e Pagamentos</button>
        </div>
    );
};