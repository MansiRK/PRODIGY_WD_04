import React from "react";
import styled from "styled-components";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { BiBookAlt } from "react-icons/bi";
import { FaCode, FaTasks } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlineTrophy } from "react-icons/ai";

import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { Bio } from "../utils/Data";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  @media (max-width: 950px) {
    padding: 22px 16px;
  }
  @media (max-width: 650) {
    padding: 10px 5px;
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
    width: 100%;
  }
`;

const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 0.2px solid gray;
`;

const NavLink = styled.a`
  color: white;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  margin: 0 15px;
  padding: 0 20px;
  border-bottom: 3px solid transparent;
  transition: color 0.8s ease, border-bottom 0.8s ease;

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
    padding: 0;
    transition: color 0.8s ease;
    &:hover {
      color: aqua;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin: 2px 10px;
`;

const Icons = styled.a`
  color: white;
  font-size: 20px;
  padding: 5px 10px;
  margin: 0 20px;
  border-bottom: 0.5px solid gray;
  transition: color 0.8s ease;
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
          <NavLink href="#accomplishment">
            <AiOutlineTrophy />
          </NavLink>
          <NavLink href="#contact">
            <FiMail />
          </NavLink>
        </NavItems>
        <IconsContainer>
          <Icons href={Bio.github}>
            <BsGithub />
          </Icons>
          <Icons href={Bio.linkedIn}>
            <AiFillLinkedin />
          </Icons>
          <Icons href={Bio.instagram}>
            <AiOutlineInstagram />
          </Icons>
        </IconsContainer>
        <Copyright>&copy; 2023</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
