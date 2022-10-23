import React from 'react';
import styled from "styled-components";
import { menuData, socialMedia } from "../data/menuData";

export const Footer = () => {
    return(
        <>
           <FooterContainer>
               <FooterLinksWrapper>
                   <FooterDescription>
                       <h1>TôDeBike</h1>
                       <p>Procuramos proporcionar as melhores experiências aos nossos clientes.</p>
                   </FooterDescription>
                   <FooterLinkItems>
                       <FooterLinkTitle>Saiba mais</FooterLinkTitle>
                       { menuData.map((item, index) => (
                           <FooterLink key={index}>
                               { item.title }
                           </FooterLink>
                       ))}
                   </FooterLinkItems>
                   <FooterLinkItems>
                       <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
                       { socialMedia.map((item, index) => (
                           <FooterLink  key={index}>
                               { item.title }
                           </FooterLink>
                       ))}
                   </FooterLinkItems>
               </FooterLinksWrapper>
           </FooterContainer>
        </>
    )
}

const FooterContainer = styled.section`
  id: "contact";
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(3, auto);
  color: #fff;
  background: #222;
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1fr);
  }
`

const FooterDescription = styled.div`
  padding: 0 2rem;
  
  h1 {
    margin-bottom: 1.2rem;
    color: #fff;
  }
  
  p {
    font-size: 14px;
  }
  
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 16px;
`

const FooterLink = styled.p`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #fff;
  
  &:hover {
    color: #0aa1dd;
    transition: 0.3s ease-out;
  }
`