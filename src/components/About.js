import React from "react";
import styled from "styled-components";
import { HiDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Bio } from "../utils/Data";
import AboutImage from "../images/bgimage.png";

const AboutContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-color: rgb(4, 25, 34);
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  padding: 10px 50px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  /* border: 1px solid white; */
`;

const AboutInnerContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
  /* padding: 0 30px; */

  /* border: 1px solid blue; */

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
    /* order: 2; */
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    /* order: 2; */
  }
`;

const AboutImgContainer = styled.div`
  width: 100%;
  height: 100%;
  /* height: 100%; */
  /* width: 90%; */
  /* padding: 5px 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 50%; */
  /* left: 50%; */
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  overflow: hidden;
  padding: 10px 50px;
  /* border: 1px solid white; */

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

  /* border: 1px solid white; */
  /* order: 1; */
  /* border: 1px solid red; */
  padding: 20px;

  @media screen and (max-width: 950px) {
    order: 2;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 600px) {
    /* order: 2; */
    height: 55%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  font-size: 38px;
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
  /* margin-bottom: 50px; */
  /* border: 1px solid yellow; */
`;

const CVButton = styled.button`
  font-size: 20px;
  font-weight: 700;
  margin: 15px;
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(204, 2, 204);
  border-radius: 50px;
  border: none;

  &:hover {
    background-color: white;
    color: rgb(204, 2, 204);
  }
  svg {
    margin-right: 5px;
    font-size: 25px;
  }

  @media screen and (max-width: 950px) {
    padding: 10px 20px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 10px 15px;
    font-size: 18px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 60%;
  height: 60%;
  /* display: flex;
  justify-content: start;
  align-items: center; */
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%; /* Optional: Apply border-radius for a circular overlay */
  border: 2px solid aqua;
  animation: glowing 3s infinite;

  @keyframes glowing {
    0% {
      box-shadow: 0 2px 5px aqua; /* Adjust color and opacity as needed */
    }
    50% {
      box-shadow: 0 0 20px rgb(204, 2, 204); /* Adjust color and opacity as needed */
    }
    100% {
      box-shadow: 0 0 15px rgba(0, 0, 255, 0.7); /* Adjust color and opacity as needed */
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
              <CVButton>
                <HiDownload />
                Download CV
              </CVButton>
            </ButtonContainer>
          </AboutTextContainer>
          {/* <AboutImage></AboutImage> */}
          <AboutImgContainer>
            <Image src={AboutImage} />
          </AboutImgContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
