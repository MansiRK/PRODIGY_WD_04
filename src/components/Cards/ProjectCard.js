import React from "react";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  width: 500px;
  height: 550px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 30px 40px;
  cursor: pointer;
  background-color: black;
  transition: all 0.8s ease;
  border-radius: 20px;
  border: 0.4px solid lightgray;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 2px 5px 20px #565356;

    filter: brightness(1);
  }

  @media screen and (max-width: 650px) {
    max-width: 500px;
    height: 450px;
    padding: 10px 15px;
    margin: 20px 10px;
    box-shadow: 2px 5px 20px #565356;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  @media screen and (max-width: 650px) {
    height: auto;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  color: aqua;
  text-align: center;
  text-transform: uppercase;
  margin: 10px 20px;

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
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  padding: 0 5px;
  @media screen and (max-width: 650px) {
    font-size: 15px;
    text-align: center;
  }
`;

const DetailText = styled.h4`
  text-align: center;
  font-size: 9px;
  font-weight: 300;
  color: aqua;
  margin-top: 30px;
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

const Date = styled.div`
  font-size: 15px;
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
          <ProjectTag key={index}>{tag}</ProjectTag>
        ))}
      </TagsContainer>
      <ProjectDetails>
        <ProjectTitle>{project?.name}</ProjectTitle>
        <Date>{project.date}</Date>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectDetails>
      <DetailText>Click for project details</DetailText>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
