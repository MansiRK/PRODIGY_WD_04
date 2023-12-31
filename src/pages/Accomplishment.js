import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { accomplishment } from "../utils/Data";
import { AiFillTrophy } from "react-icons/ai";
import AccomplishmentCard from "../components/Cards/AccomplishmentCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 650px) {
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
    padding-right: 40px;
    flex-direction: column;
    padding: 40px 0px 0px 0px;
  }
`;

const AccomplishmentTitle = styled.h2`
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

const AccomplishmentDescription = styled.div`
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
  @media (max-width: 650px) {
    align-items: end;
  }
`;

const Accomplishment = () => {
  return (
    <div id="accomplishment">
      <Container>
        <Wrapper>
          <AccomplishmentTitle>Accomplishment</AccomplishmentTitle>
          <AccomplishmentDescription>
            Accomplishments throughout my academics.
          </AccomplishmentDescription>
          <TimelineContainer>
            <Timeline>
              {accomplishment.map((accomplishment, index) => (
                <TimelineItem key={index}>
                  <TimelineContent sx={{ py: "12px", px: 3 }}>
                    <AccomplishmentCard accomplishment={accomplishment} />
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                      <AiFillTrophy
                        style={{ color: "white", fontSize: "30px" }}
                      />
                    </TimelineDot>
                    {index !== accomplishment.length - 1 && (
                      <TimelineConnector
                        style={{ background: "gray", alignItems: "center" }}
                      />
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

export default Accomplishment;
