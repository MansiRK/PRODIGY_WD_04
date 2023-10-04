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
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 850px;
  width: 100%;
  height: min-content;
  /* height: 100%; */
  border-radius: 20px;
  margin: 50px 20px;
  padding: 20px;
  position: relative;
  height: min-content;
  background-color: black;
  color: pink;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  /* margin: "10px"; */
  cursor: pointer;
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
  color: aqua;
  border: none;
  border-radius: 50px;
  background-color: gray;
  padding: 5px 20px;
  margin: 10px 15px;
`;

const ProjectTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  /* color: aqua; */
  text-align: center;
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
  /* gap: 12px; */
`;

const Button = styled.a`
  width: 50%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 12px 16px;
  margin: 10px 20px;
  border-radius: 8px;
  background-color: aqua;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: pink;
  }
  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

const ProjectDetail = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  if (!project) {
    return console.log("error"); // or handle the case when project is undefined
  }

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

          <ProjectTitle>{project?.name || "No Name"}</ProjectTitle>
          <Date>{project.date}</Date>
          <TagsContainer>
            {project?.tech.map((tag) => (
              <ProjectTag>{tag}</ProjectTag>
            ))}
          </TagsContainer>
          <ProjectDescription>{project?.description}</ProjectDescription>
          <ButtonContainer>
            <Button>Go To Code</Button>
            <Button>Go To Website</Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetail;
