import React from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  top: 0;
  left: 0;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: min-content;
  border-radius: 20px;
  margin: 50px 12px;
  padding: 20px;
  position: relative;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -5%;
  right: -5%;
  cursor: pointer;
  color: white;
  font-size: 25px;
  font-weight: 700;
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 15px;
`;

const ProjectTag = styled.span`
  font-size: 15px;
  font-weight: 500;
  padding: 5px 20px;
  margin: 10px 15px;
  color: rgb(204, 2, 204);
  border: 0.5px solid gray;
  border-radius: 50px;
  background-color: transparent;
  @media screen and (max-width: 650px) {
    margin: 5px 10px;
    padding: 5px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  color: aqua;
  text-align: center;
  padding-top: 20px;

  @media screen and (max-width: 950px) {
    font-size: 23px;
    font-weight: 700;
  }

  @media screen and (max-width: 650px) {
    font-size: 20px;
  }
`;

const ProjectDescription = styled.div`
  font-size: 20px;
  color: rgb(195, 190, 195);
  text-align: justify;
  width: 100%;
  padding: 5px;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

const Date = styled.div`
  font-size: 15px;
  margin-left: 2px;
  font-weight: 400;
  color: gray;
  text-align: center;

  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0px;
`;

const Button = styled.a`
  width: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  padding: 10px;
  margin: 10px 20px;
  border-radius: 8px;
  background-color: aqua;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.8s ease;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid rgb(204, 2, 204);
    background-color: transparent;
  }
  @media only screen and (max-width: 650px) {
    font-size: 12px;
    padding: 8px;
    margin: 10px 20px;
  }
`;

const ProjectDetail = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseButton
            onClick={() => setOpenModal({ state: false, project: null })}
          >
            <CloseIcon />
          </CloseButton>
          <ProjectImage src={project?.image} />

          <ProjectTitle>{project?.name}</ProjectTitle>
          <Date>{project.date}</Date>
          <TagsContainer>
            {project?.tech.map((tag) => (
              <ProjectTag>{tag}</ProjectTag>
            ))}
          </TagsContainer>
          <ProjectDescription>{project?.description}</ProjectDescription>
          <ButtonContainer>
            <Button href={project?.github}>Code</Button>
            {project?.live && <Button href={project.live}>Website</Button>}
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetail;
