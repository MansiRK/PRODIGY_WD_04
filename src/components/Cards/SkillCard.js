import React from "react";
import styled from "styled-components";
import { skills } from "../../utils/Data";

const SkillContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 650px) {
    max-width: 500px;
    width: 100%;
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 10px 5px;
  background-color: black;
  border-radius: 20px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border: 0.5px solid aqua;
  padding: 15px 25px;
  /* width: 300px; */

  @media screen and (max-width: 650px) {
    /* max-width: 500px; */
    width: 300px;

    padding: 10px 5px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  color: aqua;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 950px) {
    font-size: 25px;
    font-weight: 700;
  }

  @media screen and (max-width: 950px) {
    font-size: 18px;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const SkillItem = styled.div`
  height: 50px;
  max-width: 500px;
  font-size: 18px;
  font-weight: 500;
  color: rgb(204, 2, 204);
  border: 0.2px solid gray;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    font-size: 15px;
    font-weight: 450;
    padding: 2px 10px;
    margin: 10px;

    height: 35px;
  }
`;

const SkillImage = styled.img`
  width: 80%;
  height: 80%;
  padding-right: 5px;

  @media screen and (max-width: 650px) {
    width: 50%;
    height: 50%;
  }
`;

const SkillCard = () => {
  return (
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
  );
};

export default SkillCard;
