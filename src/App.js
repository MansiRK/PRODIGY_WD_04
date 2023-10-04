import Home from "./pages/Home";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Skills from "./pages/Skills";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Theme";
import { useState } from "react";
import Education from "./pages/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import Accomplishment from "./pages/Accomplishment";

const Body = styled.div`
  background-color: #1c1c27;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(5, 195, 209, 0.25) 25%,
      rgba(120, 60, 100, 0.25) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(1, 70, 209, 0.25) 50%,
      rgba(126, 6, 212, 0.25) 100%
    );
  width: 100%;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%); */
  /* 
  -webkit-clip-path: polygon(21% 0, 100% 9%, 100% 100%, 57% 100%, 0 100%, 0 8%);
  clip-path: polygon(21% 0, 100% 9%, 100% 100%, 57% 100%, 0 100%, 0 8%); */
`;

const App = () => {
  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  return (
    <Router>
      <NavBar />
      <Body>
        <Wrapper>
          <Home />
          <Skills />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Education />
          <Experience />
          <Accomplishment />
          <Contact />
        </Wrapper>
        <Footer />
        {openModal.state && (
          <ProjectDetail openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </Body>
    </Router>
  );
};

export default App;
