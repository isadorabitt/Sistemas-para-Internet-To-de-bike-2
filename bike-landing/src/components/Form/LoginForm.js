import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Button } from "../Button";
import registerForm from './CSSModule/registerForm.module.css';
import logo from "../../assets/images/logo.png";
import decoration from "../../assets/images/Decoration2.png";
import { Input } from "./Input";
import { useNavigate } from "react-router";

export const LoginForm = () => {

    
    const {login} = useAuth();
    const navigate = useNavigate();



    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = login(email, senha);

        if(res) {
            setError(res);
            return;
        }
        
        navigate("/menu");

    };

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
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <label>{error}</label>
                <Button  onClick={handleLogin} primary="true" round="true">Entrar</Button>
            </form>

            <footer className={registerForm.foot}>Não tem uma conta? <a  className= {registerForm.link} href={"/cadastro"}>Toque aqui para criar uma </a></footer>

        </main>
    )

}