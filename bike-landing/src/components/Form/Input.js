import React from "react";
import styled from 'styled-components';

export const Inpt = ({type, text, name, placeholder, value, handleOnChange}) => {
    return (
        
        <div>
            <Input type="text"/>
        </div>
       
        
    )
}



const Input = styled.input`
background-color: #D9D9D9;
width: 30rem;
height: 3.67rem;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border: none;
border-radius: 50rem;
outline: none;
text-align: center;
`