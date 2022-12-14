import React, {useState} from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import registerForm from './CSSModule/registerForm.module.css';
import {Input} from "./Input";
import logo from "../../assets/images/logo.png";
import {Button} from "../Button";

export const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [error, setError] = useState("");
    const Navigate = useNavigate();

    const {register} = useAuth();

    const handleRegister = (event) => {
        event.preventDefault();
        if (!email | !senhaConf | !senha) {
          setError("Preencha todos os campos");
          return;
        }
    
        const res = register(email, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        alert("Usuário cadastrado com sucesso!");
        Navigate("/");
      };
    

    return (

        <main className={registerForm.registerMain}>
            <div className={registerForm.left}>
                <img src={logo} alt="logo"/>
                <p>Olá, seja bem-vindo! Complete os campos ao lado para criar a sua conta.<br/>Já tem cadastro? <a className= {registerForm.link} href={"/login"}>Entrar.</a></p>
            </div>

            <form className={registerForm.form}>
                <h3 className={registerForm.registerPhrase}>Crie sua conta</h3>
                <p>Olá. Seja Bem-vindo! <br/> Digite seu e-mail e crie uma senha.</p>

                <Input 
                    type="text" 
                    placeholder="Nome"
                />
                <Input 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                
                <Input 
                    type="password" 
                    placeholder="Senha"
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <Input 
                    type="password" 
                    placeholder="Confirmar senha"
                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                />

                <h3 className={registerForm.registerPhrase}>Está quase pronto!</h3>

                <Input type="number" id="cpf" placeholder="CPF"/>
                <Input type="tel" placeholder="Telefone"/>
                <Input type="date" placeholder="Data de nascimento"/>

                <Button className={registerForm.regButton} onClick={handleRegister} primary="false" round="true">Criar Conta</Button>
                <label>{error}</label>
            </form>
        </main>
    )
}
