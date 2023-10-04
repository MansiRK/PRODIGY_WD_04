import React from "react";
import styled from "styled-components";
import ExperienceCard from "../components/ExperienceCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../utils/Data";
import { BusinessCenter } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  position: relative;
  z-index: 1;
  -webkit-clip-path: polygon(66% 5%, 100% 0, 100% 92%, 32% 100%, 0 91%, 0 0);
  clip-path: polygon(66% 5%, 100% 0, 100% 92%, 32% 100%, 0 91%, 0 0);
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 15px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  border: 1px solid white;
  gap: 12px;
  /* -webkit-clip-path: polygon(30% 0, 100% 9%, 100% 92%, 51% 100%, 0 91%, 0 11%);
  clip-path: polygon(30% 0, 100% 9%, 100% 92%, 51% 100%, 0 91%, 0 11%); */
  @media screen and (max-width: 650px) {
    /* padding-right: 40px; */
    flex-direction: column;
  }
`;

const EducationTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 950px) {
    font-size: 30px;
  }

  @media screen and (max-width: 950px) {
    font-size: 25px;
  }
  /* border: 1px solid white; */
`;

const EducationDescription = styled.div`
  font-size: 20px;
  color: rgb(195, 190, 195);
  text-align: center;
  width: 100%;
`;

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 660px) {
    align-items: start;
  }
`;

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <Wrapper>
          <EducationTitle>Experience</EducationTitle>
          <EducationDescription>Description</EducationDescription>
          <TimelineContainer>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                      <BusinessCenter />
                    </TimelineDot>
                    {index !== experience.length - 1 && (
                      <TimelineConnector style={{ background: "gray" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 3 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Experience;
