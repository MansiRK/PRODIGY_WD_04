import React from "react";
import styled from "styled-components";

const ExperienceCardContainer = styled.div`
  width: 700px;
  /* height: 100%; */
  /* min-width: 700px;
  min-height: 500px; */
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid blue;
  border-radius: 20px;
  padding: 20px 20px;

  @media screen and (max-width: 950px) {
    width: 400px;
    padding: 20px;
  }

  @media screen and (max-width: 650px) {
    width: 300px;
    padding: 10px;
  }
`;

const ExperienceDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 70px;
  height: 50px;
  margin: 10px 30px;
  background-color: white;
  border-radius: 20px;
  /* box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3); */
  @media screen and (max-width: 950px) {
    width: 20%;
    height: 20%;
  }
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  /* margin: 10px 20px; */
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid white; */

  @media screen and (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: gray;
  border: 1px solid white;
  /* padding: 10px; */
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Company = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;

  color: gray;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

const Date = styled.div`
  font-size: 18px;
  color: gray;
  @media screen and (max-width: 650px) {
    font-size: 13px;
  }
`;

const Grade = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: gray;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: gray;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid white;
  text-align: justify;

  @media only screen and (max-width: 650px) {
    font-size: 13px;
    font-weight: 700;
    text-align: center;

    /* width: 50%; */
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  display: 1px solid white;

  border: 1px solid white;
`;

const SkillItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    justify-content: start;
    gap: 2px;
  }
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: rgb(204, 2, 204);
  border: 0.2px solid gray;
  border-radius: 50px;
  /* color: gray; */
  padding: 5px;
  margin: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
    margin: 1px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <ExperienceCardContainer>
      <ExperienceDetail>
        <Image src={experience.image} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.time}</Date>
          <Grade>{experience.class}</Grade>
        </Body>
      </ExperienceDetail>
      <Description>
        {experience?.description && <span>{experience?.description}</span>}
        {experience && experience.skills && (
          <SkillContainer>
            <b>Skills:</b>
            <SkillItem>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </SkillItem>
          </SkillContainer>
        )}
      </Description>
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
