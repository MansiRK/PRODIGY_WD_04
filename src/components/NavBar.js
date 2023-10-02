import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { BiBookAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaCode, FaTasks, FaBars } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Nav = styled.div`
  background-color: rgb(3, 20, 42);
  height: 80px;
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

  @media screen and (max-width: 1100px) {
    width: 80%;
    padding: 5px 10px;
  }
`;

const NavBrand = styled(Link)`
  width: 90%;
  padding: 0 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 35px;
  font-weight: 800;
  color: white;
  text-decoration: none;

  &:hover {
    color: aqua;
  }

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const LargerO = styled.span`
  font-size: 40px;
  color: aqua;

  @media screen and (max-width: 640px) {
    font-size: 30px;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Button = styled.button`
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
  &:hover {
    background-color: aqua;
    color: white;
  }
  svg {
    margin-right: 5px;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    color: white;
    /* padding-left: 20px; */
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    margin: 15px 50px 0 2px;
    cursor: pointer;

    /* svg {
    } */
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
  /* padding: 10px 0; */
  background-color: rgb(3, 20, 42);
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "80%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "100" : "-100")};
`;

const MobileMenuItem = styled(Link)`
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

const MobileGitHubButton = styled.button`
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
        <NavBrand>
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
          <NavLink>
            <MdOutlineAccountCircle />
          </NavLink>
          <NavLink>
            <FaCode />
          </NavLink>
          <NavLink>
            <FaTasks />
          </NavLink>
          <NavLink>
            <BiBookAlt />
          </NavLink>
          <NavLink>
            <LiaSuitcaseSolid />
          </NavLink>
          <NavLink>
            <FiMail />
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <Button>
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
            href="#contact"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FiMail />
          </MobileMenuItem>
          <MobileGitHubButton>
            <BsGithub />
            GitHub
          </MobileGitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default NavBar;