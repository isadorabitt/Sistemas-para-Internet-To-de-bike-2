import React from "react";
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Button } from '../Button';



export const Input = ({ type, name, placeholder, value, handleOnChange }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (

        <InputForm 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value} 
        />
    )

}

const InputForm = styled.input`
background-color: #D9D9D9;
width: 20rem;
height: 3rem;
margin-top: 1rem;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border: none;
border-radius: 50rem;
outline: none;
padding: 1rem;
margin-bottom: 2rem;
`