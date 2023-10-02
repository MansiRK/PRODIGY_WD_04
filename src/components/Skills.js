import React from "react";
import styled from "styled-components";
import { skills } from "../utils/Data";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;
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

const SkillContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 10px 20px;
  background-color: black;
  border-radius: 20px;
  border: 1px solid aqua;
  padding: 15px 20px;

  @media screen and (max-width: 650px) {
    max-width: 500px;
    padding: 10px 15px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: aqua;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  margin: 10px;
`;

const SkillItem = styled.div`
  height: 50px;
  max-width: fit-content;
  font-size: 18px;
  font-weight: 500;
  color: rgb(204, 2, 204);
  border: 0.5px solid white;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    font-size: 15px;
    font-weight: 450;
    padding: 8px;
  }
`;

const SkillImage = styled.img`
  width: 50%;
  height: 50%;
  padding-right: 5px;
`;

const Skills = () => {
  return (
    <div id="skills">
      <Container>
        <Wrapper>
          <Title>Skills</Title>
          <Description>Description</Description>
          <SkillContainer>
            {skills.map((skill) => (
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Skills;
