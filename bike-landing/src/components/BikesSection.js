import React from "react";
import styled from "styled-components";
import Foto1 from "../assets/images/foto1.jpg"
import Foto2 from "../assets/images/foto2.jpg"
import Foto3 from "../assets/images/foto3.jpg"
import Foto4 from "../assets/images/foto4.jpg"

export const BikesSection = () => {
  return (
      <BikesContainer id="bikes">
          <BikesH1>Nossas Bikes</BikesH1>
          <BikesWrapper>
              <BikeCard>
                  <BikeImg src={Foto4}/>
              </BikeCard>
              <BikeCard>
                  <BikeImg src={Foto3}/>
              </BikeCard>
              <BikeCard>
                  <BikeImg src={Foto2}/>
              </BikeCard>
              <BikeCard>
                  <BikeImg src={Foto1}/>
              </BikeCard>
          </BikesWrapper>
      </BikesContainer>
  )
}

const BikesContainer = styled.section`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  
  @media screen and (max-width: 768px) {
    height: auto;
  }
`

const BikesH1 = styled.h1`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #222;

  @media screen and (max-width: 768px) {
    margin: 5rem auto;
  }
`

const BikesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 10px;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
  
`

const BikeCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;

  @media screen and (max-width: 768px) {
   width: 400px;
  }
`

const BikeImg = styled.img`
  height: 100%;
  max-width: 100%;
  border-radius: 10px;
  filter: brightness(75%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  
  &:hover {
    filter: brightness(100%);
    transform: translateY(-4px);
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    object-fit: cover;
  }
`