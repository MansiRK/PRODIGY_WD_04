import React from "react";
import styled from "styled-components";
import EducationCard from "../components/Cards/EducationCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../utils/Data";
import { MenuBook } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  position: relative;
  z-index: 1;
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

  @media screen and (max-width: 650px) {
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

const Education = () => {
  return (
    <div id="education">
      <Container>
        <Wrapper>
          <EducationTitle>Education</EducationTitle>
          <EducationDescription>
            These section provides an idea about my educational background.
          </EducationDescription>
          <TimelineContainer>
            <Timeline>
              {education.map((education, index) => (
                <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 3 }}>
                    <EducationCard education={education} />
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                      <MenuBook style={{ color: "white", fontSize: "30px" }} />
                    </TimelineDot>
                    {index !== education.length - 1 && (
                      <TimelineConnector style={{ background: "gray" }} />
                    )}
                  </TimelineSeparator>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Education;
