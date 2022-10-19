import React from "react";
import styles from './CSSModule/input.module.css';
//import { useForm } from "react-hook-form";
//import { Button } from '../Button';



export const Input = ({ type, name, placeholder, value, onChange }) => {
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (

        <input className={styles.input}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )

}