import React, { useEffect } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../utils/Data";
import AboutImage from "../images/bgimage.png";
import Description from "@mui/icons-material/DescriptionOutlined";

const AboutContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  z-index: 1;
  position: relative;
  padding: 150px 30px;

  @media (max-width: 1024px) {
    height: 100%;
  }

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 92%, 63% 100%, 0 92%, 0 0);
  clip-path: polygon(50% 0, 100% 0, 100% 92%, 63% 100%, 0 92%, 0 0);
`;

const AboutInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 20px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const AboutImgContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px 50px;
  pointer-events: none;

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
  @media screen and (max-width: 950px) {
    order: 1;
    height: 50%;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const AboutTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 30px;

  @media screen and (max-width: 950px) {
    order: 2;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 600px) {
    height: 55%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  font-size: 38px;
  line-height: 48px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: white;
  line-height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;

  @media (max-width: 950px) {
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

const Span = styled.span`
  padding-left: 7px;
  cursor: pointer;
  color: rgb(204, 2, 204);
`;

const TextLoop = styled.div`
  font-size: 30px;
  line-height: 40px;
  font-weight: 750;
  display: flex;
  align-items: center;
  justify-content: start;
  color: aqua;
  margin: 20px 0;

  @media (max-width: 950px) {
    font-size: 20px;
    text-align: center;
    margin: 15px 0;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: start;
  color: rgb(195, 190, 195);

  @media (max-width: 950px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const ButtonContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CVButton = styled.a`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  margin: 20px;
  padding: 15px 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(204, 2, 204);
  border-radius: 50px;
  border: none;
  text-decoration: none;
  transition: color 0.8s ease, background-color 0.8s ease;
  svg {
    margin-right: 5px;
    font-size: 25px;
    color: white;
  }

  &:hover {
    background-color: white;
    color: rgb(204, 2, 204);

    svg {
      color: rgb(204, 2, 204);
    }
  }

  @media screen and (max-width: 950px) {
    padding: 10px 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 650px) {
    padding: 10px 25px;
    font-size: 15px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 65%;
  height: 60%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  border: 2px solid aqua;
  animation: glowing 4s infinite;
  -webkit-user-drag: none;
  user-drag: none;
  -khtml-user-drag: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @keyframes glowing {
    0% {
      box-shadow: 0 2px 5px aqua;
    }
    50% {
      box-shadow: 0 0 20px rgb(204, 2, 204);
    }
    100% {
      box-shadow: 0 0 15px rgba(0, 0, 255, 0.7);
    }
  }

  @media (max-width: 950px) {
    height: 100%;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const About = () => {
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  return (
    <div id="about">
      <AboutContainer>
        <AboutInnerContainer>
          <AboutTextContainer id="text">
            <Title>
              Hello, I'm <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{ strings: Bio.roles, autoStart: true, loop: true }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>

            <ButtonContainer>
              <CVButton href={Bio.resume} target="display">
                <Description />
                View Resume
              </CVButton>
            </ButtonContainer>
          </AboutTextContainer>
          <AboutImgContainer>
            <Image src={AboutImage} />
          </AboutImgContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
