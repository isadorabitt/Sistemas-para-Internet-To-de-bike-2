import React from "react";
import { Button } from "../Button";
import registerForm from './CSSModule/registerForm.module.css';
import logo from "../../assets/images/logo.png";
import decoration from "../../assets/images/Decoration2.png";
import { Input } from "./Input";

export const LoginForm = () => {

    return (



        <main className={registerForm.loginMain}>

            <div className={registerForm.leftSection}>
                <img src={logo} alt="logo" />

                <div className={registerForm.loginText}>
                    <p>Olá. Seja bem-vindo!</p>
                    <p>Boralá!</p>
                    <p>Acesse sua conta.</p>
                </div>

                <img className={registerForm.imagem}src={decoration} alt="garoto de bike" />

            </div>

            <form className={registerForm.form}>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Button primary="true" round="true">Entrar</Button>
            </form>

            <footer>Não tem uma conta? <a href={"/cadastro"}>Toque aqui para criar uma </a></footer>

        </main>
    )

}