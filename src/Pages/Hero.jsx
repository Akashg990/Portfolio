

import React from "react";
import { Container, Box, Typography, CardContent, Grid, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import useScrollAnimation from "../useScrollAnimation";


function Hero() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <Box
      sx={{
        minHeight: {xs:"100vh" , md:"40rem" , xl:"100vh"},
        width: "100%",
        backgroundColor: "#dfdfdf",
        py: { xs: 4, md: 8 }, 
      }}
    >
      <Container
        maxWidth="md"
        ref={ref}
        className={`section ${isVisible ? "show" : ""}`}
      >
      
        <Typography
          fontWeight="bold"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            gap: 1,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 4,
          }}
        >
          <PersonIcon sx={{ fontSize: { xs: "2.5rem", md: "3.8rem" } }} />
          <span>About</span>
          <span className="purp">Me</span>
        </Typography>

        {/* Responsive Grid Layout */}
        <Grid container spacing={4} alignItems="center" sx={{display:"flex" , justifyContent:"center"}}>
          {/* Image */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img
              src="/IMG_20250424_124927.jpg"
              alt="Akash Gond"
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "8px",
              }}
            />
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 1,
                }}
              >
                I'm Akash
              </Typography>
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
                Full Stack Developer
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                I'm a Full stack developer based in Pune. I am currently a
                Computer Science Student at G.H Raisoni College Pune. I am
                passionate about learning and improving coding skills and
                developing web applications. I build webApps and websites using
                MERN Stack.
              </Typography>
              <Typography>
                <strong>Email:</strong> akashgond5522@gmail.com
              </Typography>
              <Typography>
                <strong>Place:</strong> Pune, India - 411039
              </Typography>
              <Typography sx={{marginTop:"1rem"}}>
                <Button variant="contained" href="https://drive.google.com/file/d/12hzxFZtlxXqHpNi1n6sTyZK-y7WwHZt1/view?usp=drive_link" target="_blank">Resume</Button>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
