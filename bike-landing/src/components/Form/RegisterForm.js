import React from "react";
import styles from './CSSModule/registerForm.module.css';
import { Input } from "./Input";

export const RegisterForm = () => {

    return (

        <form className={styles.form}>
        <h3 className={styles.registerPhrase}>Crie sua conta</h3>

        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="password"  placeholder="Senha" />
        <Input type="password" placeholder="Confirmar senha" />

        <h3 className={styles.registerPhrase}>Está quase pronto!</h3>

        <Input type="number" id="cpf" placeholder="CPF" />
        <Input type="tel" placeholder="Telefone"/>
        <Input type="date" placeholder="Data de nascimento" />

        {/* <Button primary="true" round="true">Criar Conta</Button> */}
        </form>
        
    )
}
