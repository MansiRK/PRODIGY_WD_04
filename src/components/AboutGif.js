import React from "react";
import styled from "styled-components";
import GifImage from "../images/newgif.gif";
import OverImage from "../images/bgimage.png";
const Wrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
`;

// const Gif = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* Ensure the GIF covers the entire container */
// `;

const OverlayImage = styled.img`
  /* position: absolute; */
  /* transform: translate(-50%, -50%); */
  /* width: 100%;
  height: 100%; */
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%; /* Optional: Apply border-radius for a circular overlay */
  border: 1px solid aqua;
  animation: glowing 3s infinite;

  @keyframes glowing {
    0% {
      box-shadow: 0 2px 5px aqua; /* Adjust color and opacity as needed */
    }
    50% {
      box-shadow: 0 0 20px rgb(204, 2, 204); /* Adjust color and opacity as needed */
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.7); /* Adjust color and opacity as needed */
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const AboutGif = () => {
  return (
    <Wrapper>
      <OverlayImage src={OverImage} />
    </Wrapper>
  );
};

export default AboutGif;
