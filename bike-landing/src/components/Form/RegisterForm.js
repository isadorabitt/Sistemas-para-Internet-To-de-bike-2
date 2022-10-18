import React from "react";
import registerForm from './CSSModule/registerForm.module.css';
import {Input} from "./Input";
import logo from "../../assets/images/logo.png";
import {Button} from "../Button";

export const RegisterForm = () => {

    return (

        <main className={registerForm.registerMain}>
            <div className={registerForm.left}>
                <img src={logo} alt="logo"/>
                <p>Olá. Seja Bem-vindo! Complete os campos ao lado para criar a sua conta. Já tem cadastro? <a href={"/login"}>Entrar.</a></p>
            </div>

            <form className={registerForm.form}>
                <h3 className={registerForm.registerPhrase}>Crie sua conta</h3>

                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Senha"/>
                <Input type="password" placeholder="Confirmar senha"/>

                <h3 className={registerForm.registerPhrase}>Está quase pronto!</h3>

                <Input type="number" id="cpf" placeholder="CPF"/>
                <Input type="tel" placeholder="Telefone"/>
                <Input type="date" placeholder="Data de nascimento"/>

                <Button primary="false" round="true">Criar Conta</Button>
            </form>
        </main>
    )
}
