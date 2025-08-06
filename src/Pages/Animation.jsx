import React from 'react';
import { Container, Typography,Box , Link as Mullink  } from '@mui/material';
import {Button} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link as Scrollink } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import useScrollAnimation from "../useScrollAnimation";
const roles =[
    "Web Development",
    "Frontend Development",
    "Backend Development"
];

function Animation() {
   const [ref, isVisible] = useScrollAnimation();
      const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex));

      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
     <Box sx={{  height: {xs:"43.9rem" ,md:"40rem", xl:"100vh"}, overflow: 'hidden' ,width:'100%'}}  >
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/8084632-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Content over video */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100vh',
          display: 'flex',
          color: 'white',
          
          
        }}
        ref={ref} className={`section ${isVisible ? "show" : ""}`}
      >
        <Typography component='div' fontWeight="bold">
           <div className='head'>
               <span className='tit'>Hi There,</span><br/>
                <span className='tit'>I'm Akash </span><span className='tit '>Gond</span><br/>
                <span style={{fontSize:'1.5rem',transition: 'opacity 0.5s ease',}}>I am into {text}</span><br />
                <Scrollink to="Aboutme" smooth={true} duration={500}>
                 <Button variant='contained' sx={{marginTop:'10px'}} >About me </Button>
                 </Scrollink>
               <Typography component="div" sx={{marginTop:"2rem"}}>
                 <Typography component="div" sx={{display:"flex" , gap:"1rem"}}>
                  <Mullink href="https://www.linkedin.com/in/akash-gond-016743259/" target="_blank" rel="noopener  noreferrer">
                     <LinkedInIcon fontSize='large' sx={{color:"blue"}}/>
                  </Mullink>
                  <Mullink href="https://github.com/Akashg990" target="_blank" rel="noopener  noreferrer">
                      <GitHubIcon fontSize='large'sx={{color:"black"}}/>
                  </Mullink>
                    
                    <TelegramIcon fontSize='large'sx={{color:"blue"}}/>
                    <Mullink href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <XIcon fontSize="large" sx={{color:"black"}}/>
                    </Mullink>
                    <Mullink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <InstagramIcon fontSize='large'sx={{color:"red"}}/>
                    </Mullink>
                    
                 </Typography>
               </Typography>
           </div>
           
           
           
        </Typography>
      </Container>
    </Box>
  );
}

export default Animation;

// import React, { useState, useEffect } from "react";
// import { Container, Typography, Box, Link as MuiLink, Button } from "@mui/material";
// import { Link as ScrollLink } from "react-scroll";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import XIcon from "@mui/icons-material/X";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import useScrollAnimation from "../useScrollAnimation";

// // Typing text array
// const roles = ["Web Development", "Frontend Development", "Backend Development"];

// function Animation() {
//   const [ref, isVisible] = useScrollAnimation();
//   const [text, setText] = useState("");
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // Typing effect
//   useEffect(() => {
//     const currentRole = roles[roleIndex];
//     const typingSpeed = isDeleting ? 60 : 120;

//     const timeout = setTimeout(() => {
//       setText(currentRole.substring(0, charIndex));

//       if (!isDeleting) {
//         if (charIndex < currentRole.length) {
//           setCharIndex((prev) => prev + 1);
//         } else {
//           setIsDeleting(true);
//         }
//       } else {
//         if (charIndex > 0) {
//           setCharIndex((prev) => prev - 1);
//         } else {
//           setIsDeleting(false);
//           setRoleIndex((prev) => (prev + 1) % roles.length);
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, roleIndex]);

//   return (
//     <Box sx={{ height: "100vh", width: "100%", overflow: "hidden" }}>
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           zIndex: -1,
//         }}
//       >
//         <source src="/8084632-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//       </video>

//       {/* Content */}
//       <Container
//         maxWidth="xl"
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: { xs: "center", md: "flex-start" },
//           color: {xs:"Lightcyan" , md:"white"},
//           textAlign: { xs: "center", md: "left" },
//         }}
//         ref={ref}
//         className={`section ${isVisible ? "show" : ""}`}
//       >
//         <Box>
//           <Typography
//             sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: "bold" }}
//           >
//             Hi There,
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "2rem", md: "3.5rem" },
//               fontWeight: "bold",
//               lineHeight: 1.2,
//             }}
//           >
//             I'm Akash <span style={{ color: "white" }}>Gond</span>
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "1rem", md: "1.5rem" },
//               mt: 1,
//               transition: "opacity 0.5s ease",
//             }}
//           >
//             I am into {text}
//           </Typography>

//           {/* About Me Button */}
//           <ScrollLink to="Aboutme" smooth duration={500}>
//             <Button
//               variant="contained"
//               sx={{
//                 mt: 2,
//                 fontSize: { xs: "0.8rem", md: "1rem" },
//                 padding: { xs: "6px 14px", md: "8px 20px" },
//               }}
//             >
//               About Me
//             </Button>
//           </ScrollLink>

//           {/* Social Links */}
//           <Box
//             sx={{
//               display: "flex",
//               gap: 2,
//               mt: 3,
//               justifyContent: { xs: "center", md: "flex-start" },
//             }}
//           >
//             <MuiLink href="https://www.linkedin.com/in/akash-gond-016743259/" target="_blank" rel="noopener noreferrer">
//               <LinkedInIcon fontSize="large" sx={{ color: "blue" }} />
//             </MuiLink>

//             <MuiLink href="https://github.com/Akashg990" target="_blank" rel="noopener noreferrer">
//               <GitHubIcon fontSize="large" sx={{ color: "black" }} />
//             </MuiLink>

//             <TelegramIcon fontSize="large" sx={{ color: "blue" }} />

//             <MuiLink href="https://x.com/" target="_blank" rel="noopener noreferrer">
//               <XIcon fontSize="large" sx={{ color: "black" }} />
//             </MuiLink>

//             <MuiLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//               <InstagramIcon fontSize="large" sx={{ color: "red" }} />
//             </MuiLink>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Animation;
