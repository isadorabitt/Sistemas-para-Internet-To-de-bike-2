import React from "react";
import { Button } from "../Button";
import registerForm from './CSSModule/registerForm.module.css';
import { Input } from "./Input";

export const LoginForm = () => {

    return (
        <form className={registerForm.form}>
            <Input type="email" placeholder="Email" />
            <Input type="password"  placeholder="Senha" />
            <Button primary="true" round="true">Entrar</Button>
        </form>
    )

}