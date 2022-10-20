import React from "react";
import styled from "styled-components";

export const BikesSection = () => {
    return (
        <>
            <BikesContainer>
                <BikesH1>Confira nossas Super Bicicletas!</BikesH1>
            </BikesContainer>
        </>
    )
}

const BikesContainer = styled.section`
  padding: 4rem calc((100vw - 1300px) / 2);
  background: red;
  color: white;
`