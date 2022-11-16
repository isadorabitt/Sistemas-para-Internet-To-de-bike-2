import React from "react";
import { Button } from "../Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slide.css";

import img1 from "../../assets/images/foto5.jpg";
import img2 from "../../assets/images/foto6.jpg";
import img3 from "../../assets/images/foto7.jpg";

export const Carrousel = () => {
  return (
    <div className="containerCarrousel">
      <Carousel className="mainMenu">
        <div>
          <img src={img1} height="300px" width="300px" />
        </div>
        <div>
          <img src={img2} height="300px" width="300px" />
        </div>
        <div>
          <img src={img3} height="300px" width="300px" />
        </div>
      </Carousel>
    </div>
  );
};
