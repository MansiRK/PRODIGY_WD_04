import React from "react";
import styled from "styled-components";
import SkillCard from "../components/Cards/SkillCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 5px;
  }
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
  margin-top: 20px;

  @media screen and (max-width: 950px) {
    font-size: 30px;
  }

  @media screen and (max-width: 950px) {
    font-size: 25px;
  }
`;

const Description = styled.div`
  font-size: 22px;
  color: rgb(195, 190, 195);
  text-align: center;
  width: 70%;
`;

const Skills = () => {
  return (
    <div id="skills">
      <Container>
        <Wrapper>
          <Title>Skills</Title>
          <Description>
            This are some the skills in which I'm proficient.
          </Description>
          <SkillCard />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Skills;
