import React from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { projects } from "../utils/Data";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: 50px 20px;
  height: min-content;
  background-color: aqua;
  color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  position: "absolute";
  top: "10px";
  right: "20px";
  cursor: "pointer";
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
  font-weight: 500;
  color: aqua;
  border: none;
  border-radius: 50px;
  background-color: gray;
  padding: 5px 20px;
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

const ProjectDetail = ({ openModal, setOpenModal }) => {
  const project = openModal?.projects;
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
          <ProjectImage />
          Image
          <ProjectTitle>Title</ProjectTitle>
          <Date>Date</Date>
          <TagsContainer>
            <ProjectTag>Tag</ProjectTag>
          </TagsContainer>
          <ProjectDescription>Description</ProjectDescription>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetail;
