import React from "react";
import styles from './CSSModule/input.module.css';

export const Input = ({ type, name, placeholder, value, onChange }) => {

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