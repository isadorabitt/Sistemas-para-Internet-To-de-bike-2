import React from "react";
import { ImageCarousel } from "../Carousel";
import { Button } from '../Button';
import stations from "./CSSModule/stations.module.css";

export const NearStations = () => {

return (

<div className={stations.NearStations}>
    <div >
        <h3>Estações próximas:</h3>
        <ImageCarousel/>
    </div>

    <div className={stations.MoreStations}>
        <h3> Não encontrou as estações que Procura? </h3>
        <Button primary="true" round="true"> Mais estações</Button>
    </div>
</div>


)


}