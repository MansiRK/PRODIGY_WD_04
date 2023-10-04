import React, { useRef } from "react";
import styled from "styled-components";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 5px;
  }
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90%;

  @media screen and (max-width: 650px) {
    width: 100%;
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

const ContactForm = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 20px;
  margin: 30px 20px;
  padding: 30px 100px;

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 20px;
  }
`;

const ContactLabel = styled.label`
  font-size: 20px;
  margin: 15px 0 15px 20px;
  color: white;
  @media screen and (max-width: 650px) {
    font-size: 15px;
  }
`;

const ContactInput = styled.input`
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
  border: 1px solid white;
  border-radius: 50px;
  background-color: transparent;
  padding: 10px 20px;

  &:hover {
    border: 1px solid rgb(106, 30, 116);
  }
  @media screen and (max-width: 650px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const TextMessage = styled.textarea`
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
  border: 1px solid white;
  border-radius: 50px;
  background-color: transparent;
  padding: 10px 20px;

  &:hover {
    border: 1px solid rgb(106, 30, 116);
  }

  @media screen and (max-width: 650px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  width: 100%;
  padding: 10px 30px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: aqua;
  border-radius: 50px;
  border: none;

  &:hover {
    background-color: white;
    color: aqua;
  }

  @media screen and (max-width: 950px) {
    width: 50%;
    padding: 10px 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 30%;
    padding: 10px 25px;
    font-size: 15px;
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log("EmailJS Result:", result);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <Container>
        <Title>Contact</Title>
        <Description>Connect by simply sending me a message.</Description>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactLabel>Name</ContactLabel>
          <ContactInput type="text" placeholder="John Doe" name="user_name" />
          <ContactLabel>Email</ContactLabel>
          <ContactInput
            type="email"
            placeholder="jonhdoe@example.com"
            name="user_email"
          />
          <ContactLabel>Message</ContactLabel>
          <TextMessage placeholder="Your Message.." name="user_message" />
          <ButtonContainer>
            <Button>Submit</Button>
          </ButtonContainer>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Thank you for sending your message!"
          severity="success"
        />
        <Wrapper />
      </Container>
    </div>
  );
};

export default Contact;
