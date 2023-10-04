import React from "react";
import styled from "styled-components";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { BiBookAlt } from "react-icons/bi";
import { FaCode, FaTasks } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  @media (max-width: 960px) {
    padding: 22px 16px;
  }
  @media (max-width: 640) {
    padding: 18px 5px;
  }
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 650px) {
    width: 70%;
  }
`;

const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 0.2px solid gray;
  /* border: 1px solid white; */
`;

const NavLink = styled.a`
  color: white;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  margin: 0 15px;
  padding: 0 20px;

  &:hover {
    color: aqua;
    border-bottom: 3px solid aqua;
  }

  @media screen and (max-width: 650px) {
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    padding: 5px 5px;

    &:hover {
      color: aqua;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const Icons = styled.a`
  color: white;
  font-size: 20px;
  padding: 5px 10px;
  margin: 0 20px;
  border-bottom: 0.5px solid gray;
  &:hover {
    color: rgb(204, 2, 204);
  }

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

const Copyright = styled.p`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <NavItems>
          <NavLink href="#about">
            <MdOutlineAccountCircle />
          </NavLink>
          <NavLink href="#skills">
            <FaCode />
          </NavLink>
          <NavLink href="#projects">
            <FaTasks />
          </NavLink>
          <NavLink href="#education">
            <BiBookAlt />
          </NavLink>
          <NavLink href="#experience">
            <LiaSuitcaseSolid />
          </NavLink>
          <NavLink href="#contact">
            <FiMail />
          </NavLink>
        </NavItems>
        <IconsContainer>
          <Icons>
            <BsGithub />
          </Icons>
          <Icons>
            <AiFillLinkedin />
          </Icons>
          <Icons>
            <AiOutlineInstagram />
          </Icons>
        </IconsContainer>
        <Copyright>&copy; 2023</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
