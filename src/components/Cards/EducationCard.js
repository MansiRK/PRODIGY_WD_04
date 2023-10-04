import React from "react";
import styled from "styled-components";

const EducationCardContainer = styled.div`
  width: 700px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
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

const EducationDetail = styled.div`
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

const Name = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: rgb(204, 2, 204);
  padding: 5px 10px;
  /* padding: 10px; */
  text-align: center;

  @media screen and (max-width: 650px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;

  color: aqua;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: rgb(12, 190, 190);
  padding: 5px;
  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 20px;
  /* font-weight: 500; */
  color: rgb(195, 190, 195);
  margin-bottom: 10px;
  padding: 5px;
  text-align: justify;

  @media only screen and (max-width: 650px) {
    font-size: 15px;
    text-align: center;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <EducationCardContainer>
      <EducationDetail>
        <Image src={education.image} />
        <Body>
          <Name>{education.degree}</Name>
          <School>{education.school}</School>
          <Date>{education.time}</Date>
          <Grade>{education.class}</Grade>
        </Body>
      </EducationDetail>
      <Description>{education.description}</Description>
    </EducationCardContainer>
  );
};

export default EducationCard;
