import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router";
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
    const [cpf, setCpf] = useState("");
    const [telefone, setTel] = useState("");
    const [nascimento, setNasc] = useState("");
    const navigate = useNavigate();

    const {register} = useAuth();

    const handleRegister = () => {
        if (!email | !senhaConf | !senha | !cpf | !telefone | !nascimento) {
          setError("Preencha todos os campos");
          return;
        } else if (senha !== senhaConf) {
          setError("As senhas não são iguais");
          return;
        }
    
        const res = register(email, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
        
      };
    

    return (

        <main className={registerForm.registerMain}>
            <div className={registerForm.left}>
                <img src={logo} alt="logo"/>
                <p>Olá, seja bem-vindo! Complete os campos ao lado para criar a sua conta.<br/>Já tem cadastro? <a className= {registerForm.link}href={"/login"}>Entrar.</a></p>
            </div>

            <form className={registerForm.form}>
                <h3 className={registerForm.registerPhrase}>Crie sua conta</h3>

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

                <Input 
                    type="number" 
                    placeholder="CPF"
                    onChange={(e) => [setCpf(e.target.value), setError("")]}
                />
                <Input 
                    type="tel" 
                    placeholder="Telefone"
                    onChange={(e) => [setTel(e.target.value), setError("")]}
                />
                <Input 
                    type="date" 
                    placeholder="Data de nascimento"
                    onChange={(e) => [setNasc(e.target.value), setError("")]}
                />

                <Button 
                    onClick={handleRegister} 
                    type="button"
                    primary="false" 
                    round="true">Criar Conta
                </Button>
                <label>{error}</label>
            </form>
        </main>
    )
}
