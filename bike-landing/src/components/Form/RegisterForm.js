import React from "react";
import styled from 'styled-components';
import { Input } from "./Input";

export const RegisterForm = () => {

    return (
        <Form>
        <H3>Crie sua conta</H3>

        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="password"  placeholder="Senha" />
        <Input type="password" placeholder="Confirmar senha" />

        <H3>Está quase pronto!</H3>

        <Input type="number" id="cpf" placeholder="CPF" />
        <Input type="tel" placeholder="Telefone"/>
        <Input type="date" placeholder="Data de nascimento" />

        {/* <Button primary="true" round="true">Criar Conta</Button> */}
        </Form>


    )
}



const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-left: 5rem;
`

const H3 = styled.h3`
color: #0098DA;
margin-top: 2rem; 
`