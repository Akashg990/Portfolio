import React from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import { useState, useRef } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
function Contact() {
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    message: " ",
  });

  const [sentMessage, setsentMessage] = useState(false);

  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setsentMessage(true);
        setFormData({ name: " ", email: " ", message: " " });

        setTimeout(() => setsentMessage(false), 6000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  // event handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(formData.name);
  //   setFormData({ name: " ", email: " ", message: " " });
  // };

  return (
    <Box sx={{ height: "45rem", width: "100%", backgroundColor: "azure" }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          height: { xs: "22rem", xl: "22rem" },
          width: { xs: "10rem", xl: "56rem" },
        }}
      >
        <div className="cont-h">
          <LocalPhoneIcon fontSize="large" color="primary" />
          <h1 className="">Get in Touch</h1>
        </div>
        <div className="cont-card">
          {sentMessage && (
            <Alert  severity="success">Contacted Successfully.</Alert>
          )}
          <div>
            <img src="communication.png" alt="img" />
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: { xs: "10rem", xl: "25rem" },
              }}
              ref={form}
              onSubmit={sendMail}
            >
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ "& .MuiInputBase-root": { height: 50 } }}
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                required
              />

              <TextField
                label="Message"
                name="message"
                onChange={handleChange}
                value={formData.message}
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: { xs: "2rem", xl: "5rem" } }}
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Contact;
