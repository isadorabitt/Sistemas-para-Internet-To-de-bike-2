import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/menuData";
import Logo from "../assets/images/logo.png";
import { Button } from "./Button";

export const Header = () => {
  return (
    <Nav>
      <Img src={Logo} alt="logo" />
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>

          <Button
              primary
              round
              small
              style={{backgroundColor:'transparent', border: ' 1.5px solid #0098DA', marginRight:'0.9rem'}}
          >
              <Link to={"/cadastro"}>Cadastre-se</Link>

          </Button>
          <Button
              primary
              round
              small
          >
           <Link to={"/login"}>Login</Link>
          </Button>
      </NavBtn>
    </Nav>
  );
};

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  
`;

const Img = styled.img`
  cursor: pointer;
  width: auto;
  height: auto;
`;

const NavLink = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  
  &:hover {
    color: #0aa1dd;
    transition: 0.6s ease-out;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
