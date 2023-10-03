import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%); */
  -webkit-clip-path: polygon(21% 0, 100% 9%, 100% 100%, 53% 92%, 0 100%, 0 11%);
  clip-path: polygon(21% 0, 100% 9%, 100% 100%, 53% 92%, 0 100%, 0 11%);
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
    /* order: 2; */
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    /* order: 2; */
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

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 28px; */
  flex-wrap: wrap;
`;
const Projects = () => {
  return (
    <div id="projects">
      <Container>
        <Wrapper>
          <Title>Projects</Title>
          <Description>Description</Description>
          <CardContainer>
            <ProjectCard />
          </CardContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Projects;
