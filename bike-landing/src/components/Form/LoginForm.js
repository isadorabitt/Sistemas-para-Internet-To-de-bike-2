import React from "react";
import { Button } from "../Button";
import styles from './CSSModule/loginForm.module.css';
import { Input } from "./Input";

export const LoginForm = () => {

    return (
        <form className={styles.form}>
            <Input type="email" placeholder="Email" />
            <Input type="password"  placeholder="Senha" />
            <Button primary="true" round="true">Entrar</Button>
        </form>

    )

}