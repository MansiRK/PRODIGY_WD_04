import React from "react";
import styled from "styled-components";
import { projects } from "../utils/Data";
import Image from "../images/home.jpeg";
import ProjectDetail from "./ProjectDetail";

const ProjectCardContainer = styled.div`
  width: 500px;
  height: 600px;
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
  height: 250px;
  /* background-color: white; */
  border-radius: 20px;
  /* box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3); */
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* margin: 10px 15px; */
  border: 1px solid white;
  padding: 10px 2px 5px 2px;

  @media screen and (max-width: 650px) {
    padding: 2px;
  }
`;

const ProjectTag = styled.span`
  font-size: 15px;
  color: rgb(204, 2, 204);
  border: 0.5px solid gray;
  border-radius: 50px;
  background-color: transparent;
  padding: 5px 20px;
  margin: 5px;

  @media screen and (max-width: 650px) {
    padding: 5px;
  }
`;

const ProjectDetails = styled.div`
  width: 100%;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border: 1px solid white;
  /* padding: 20px; */

  @media screen and (max-width: 650px) {
    /* height: 50%; */
  }
`;

const ProjectTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  color: aqua;
  text-align: center;
  text-transform: uppercase;
  margin: 10px 20px;
  border: 1px solid white;

  @media screen and (max-width: 950px) {
    font-size: 18px;
    font-weight: 700;
  }

  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`;

const ProjectDescription = styled.div`
  font-size: 20px;
  color: rgb(195, 190, 195);
  overflow: hidden;
  /* margin-top: 8px; */
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  border: 1px solid white;

  /* padding: 10px; */
  padding: 0 5px;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    text-align: center;
  }
`;

const Date = styled.div`
  font-size: 15px;
  border: 1px solid white;
  font-weight: 400;
  color: rgb(106, 30, 116);
  padding: 5px;
  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <ProjectCardContainer
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <ProjectImage src={project.image} />
      <TagsContainer>
        {project.tech?.map((tag, index) => (
          <ProjectTag>{tag}</ProjectTag>
        ))}
      </TagsContainer>
      <ProjectDetails>
        <ProjectTitle>{project?.name}</ProjectTitle>
        <Date>{project.date}</Date>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectDetails>
      {/* <ProjectDetail /> */}
    </ProjectCardContainer>
  );
};

export default ProjectCard;
