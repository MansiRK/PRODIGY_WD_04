import React from "react";
import styled from "styled-components";

const ExperienceCardContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  padding: 20px;

  @media screen and (max-width: 950px) {
    width: 400px;
    padding: 20px;
  }

  @media screen and (max-width: 650px) {
    width: 250px;
    padding: 0;
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
  height: 70px;
  object-fit: contain;
  margin: 10px 30px;
  background-color: white;
  border-radius: 20px;
  @media screen and (max-width: 950px) {
    width: 20%;
    height: 20%;
  }
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }
`;

const Role = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: rgb(204, 2, 204);
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  padding: 5px 10px;

  @media screen and (max-width: 650px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Company = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;

  color: aqua;

  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

const Date = styled.div`
  font-weight: 400;
  color: rgb(12, 190, 190);
  padding: 5px;
  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 20px;
  color: rgb(195, 190, 195);
  margin-bottom: 10px;
  padding: 5px;
  text-align: justify;

  @media only screen and (max-width: 650px) {
    font-size: 15px;
    text-align: center;
  }
`;

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 650px) {
    justify-content: top;
    gap: 2px;
  }
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: aqua;
  border: 0.2px solid gray;
  border-radius: 50px;
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
        <Image src={experience.image} alt="experience" />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.time}</Date>
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
