import React from "react";
import styled from "styled-components";
import ExperienceCard from "../components/Cards/ExperienceCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../utils/Data";
import { BusinessCenter } from "@mui/icons-material";

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  position: relative;
  z-index: 1;

  -webkit-clip-path: polygon(66% 5%, 100% 0, 100% 92%, 32% 100%, 0 91%, 0 0);
  clip-path: polygon(66% 5%, 100% 0, 100% 92%, 32% 100%, 0 91%, 0 0);
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 10px;
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
  gap: 12px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding-left: 20px;
    padding: 40px 0px 0px 0px;
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
    align-items: end;
  }
`;

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <Wrapper>
          <EducationTitle>Experience</EducationTitle>
          <EducationDescription>
            My work experience as a web developer.
          </EducationDescription>
          <TimelineContainer>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                      <BusinessCenter
                        style={{ color: "white", fontSize: "30px" }}
                      />
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
