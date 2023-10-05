import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { BiBookAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaCode, FaTasks, FaBars } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiOutlineTrophy } from "react-icons/ai";
import { Bio } from "../utils/Data";

const Nav = styled.div`
  background-color: #1c1c27;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  position: sticky;
  top: 0;
  z-index: 20;

  @media screen and (max-width: 950px) {
    transition: 0.1s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  z-index: 1;
  width: 80%;
  padding: 5px 20px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 5px 2px;
  }

  @media screen and (max-width: 1100px) {
    padding: 0;
  }
`;

const NavBrand = styled.a`
  width: 20%;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: 800;
  color: white;
  text-decoration: none;

  &:hover {
    color: rgb(204, 2, 204);
  }

  @media screen and (max-width: 1250px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 1050px) {
    margin: 0 5px;
  }

  @media screen and (max-width: 650px) {
    font-size: 25px;
    width: 20%;
    padding-left: 100px;
  }
`;

const LargerO = styled.span`
  font-size: 40px;
  color: aqua;

  @media screen and (max-width: 650px) {
    font-size: 30px;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
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

  @media screen and (max-width: 1100px) {
    margin: 0 5px;
  }
`;

const ButtonContainer = styled.div`
  width: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Button = styled.a`
  font-size: 20px;
  font-weight: 700;
  margin: 15px;
  padding: 5px 20px;
  color: aqua;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid aqua;
  text-decoration: none;

  &:hover {
    background-color: aqua;
    color: white;
  }
  svg {
    margin-right: 5px;
  }

  @media screen and (max-width: 1050px) {
    margin: 5px;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    color: white;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    margin: 10px 50px 5px 2px;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  top: 80px;
  right: 0;
  background-color: #1c1c27;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "80%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "100" : "-100")};
`;

const MobileMenuItem = styled.a`
  color: white;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 25px;
  border-bottom: 0.2px solid gray;

  &:hover {
    color: aqua;
  }
`;

const MobileGitHubButton = styled.a`
  display: none;
  @media screen and (max-width: 950px) {
    font-size: 18px;
    font-weight: 700;
    margin: 15px;
    padding: 5px 20px;
    color: aqua;
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 50px;
    text-decoration: none;
    border: 2px solid aqua;
    &:hover {
      background-color: aqua;
      color: white;
    }
    svg {
      margin-right: 5px;
    }
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavBrand href="#about">
          P<LargerO>O</LargerO>rtfolio
        </NavBrand>
        <MobileMenuIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileMenuIcon>
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
        <ButtonContainer>
          <Button href={Bio.github}>
            <BsGithub />
            GitHub
          </Button>
        </ButtonContainer>
      </NavContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuItem
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MdOutlineAccountCircle />
          </MobileMenuItem>
          <MobileMenuItem
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaCode />
          </MobileMenuItem>
          <MobileMenuItem
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaTasks />
          </MobileMenuItem>
          <MobileMenuItem
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BiBookAlt />
          </MobileMenuItem>
          <MobileMenuItem
            href="#experience"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <LiaSuitcaseSolid />
          </MobileMenuItem>
          <MobileMenuItem
            href="#accomplishment"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineTrophy />
          </MobileMenuItem>
          <MobileMenuItem
            href="#contact"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FiMail />
          </MobileMenuItem>
          <MobileGitHubButton href={Bio.github}>
            <BsGithub />
            GitHub
          </MobileGitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default NavBar;
