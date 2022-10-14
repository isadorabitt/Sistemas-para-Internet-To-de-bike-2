import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { RegisterForm } from "../components/Form/RegisterForm";

export const Cadastro = () => {
  return (
    <DivPrincipal>
      <SecEsquerda>
        <Img src={logo} />
        <P>Olá. Seja Bem-vindo! <br/>
          Complete os campos ao lado para criar a sua conta. </P>
        <P>Já tem cadastro? <ALink>Entrar.</ALink></P>
      </SecEsquerda>
      <SecDireita>
        <RegisterForm />
      </SecDireita>
    </DivPrincipal>
  )
}

const SecEsquerda = styled.section`
  background: linear-gradient(180deg, #0098DA 0%, #49B27A 65.62%, rgba(106, 189, 80, 0.98) 100%);
box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.22);`

const SecDireita = styled.section`
  padding-right: 17rem;`

const DivPrincipal = styled.div`
  display:flex;
  justify-content: space-between;`

  const ALink = styled.a`
  color: black;`

const P = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 36px;
text-align: center;
color: #FFFFFF;
margin-top: 5rem;`

const Img = styled.img`
  padding-left: 17rem;
    margin-top: 7rem;`

