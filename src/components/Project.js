import React from "react";
import styled from "styled-components";
import { projects } from "../utils/Data";
import Image from "../images/home.jpeg";
import ProjectDetail from "./ProjectDetail";
const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 30px 20px;
  cursor: pointer;
  background-color: black;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1);
  }

  @media screen and (max-width: 650px) {
    max-width: 500px;
    padding: 10px 15px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  /* box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3); */
`;

const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 15px;
`;

const ProjectTag = styled.span`
  font-size: 15px;
  color: aqua;
  border: none;
  border-radius: 50px;
  background-color: gray;
  padding: 5px 20px;
`;

const ProjectDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;
`;

const ProjectTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  color: aqua;
  text-align: start;
  border: 1px solid white;
`;

const ProjectDescription = styled.div`
  font-size: 20px;
  color: rgb(195, 190, 195);
  text-align: justify;
  width: 100%;
`;

const Date = styled.div`
  font-size: 15px;
  margin-left: 2px;
  font-weight: 400;
  color: gray;

  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

const Project = (setOpenModel) => {
  return (
    <ProjectCard onClick={() => setOpenModel({ state: true })}>
      <ProjectImage src={projects.image} />
      <TagsContainer>
        {projects.tech?.map((tech, index) => (
          <ProjectTag>{tech}</ProjectTag>
        ))}
      </TagsContainer>
      <ProjectDetails>
        <ProjectTitle>{projects.name}</ProjectTitle>
        <Date>{projects.date}</Date>
        <ProjectDescription>{projects.description}</ProjectDescription>
      </ProjectDetails>
      <ProjectDetail />
    </ProjectCard>
  );
};

export default Project;
