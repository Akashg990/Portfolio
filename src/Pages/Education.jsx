import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import useScrollAnimation from "../useScrollAnimation";
function Education()
{
  const [ref , isVisible]= useScrollAnimation();
    return(
        <Box sx={{height:{xs:"40rem", sm:"50rem" , xl:"100vh"},overflow:"hidden" , width:'100%' , backgroundColor:"#e1f3f3"}}>
          <Container maxWidth="md" sx={{display:'flex', justifyContent:"center", flexDirection:'column',gap:'1rem' , alignItems:'center'}}  ref={ref} className={`section ${isVisible ? "show" : ""}`}>
                <div className="skil-head">
                  <SchoolIcon sx={{fontSize:"3rem"}}/><h1 id="edu-head">My Education</h1>
                </div>
                 
                 <div className="edu-card">
                  <div>
                       <img src="/1677603821phpcAro27.jpeg" alt="img"/>
                  </div>
                  <div className="div2">
                   <h2>Bachelor Of Technology in Computer Engineering</h2>
                   <p>G.H Raisoni College of Engineering And Management</p>
                   <h3>2022-2026 | Pursuing</h3>
                  </div>
                   
                 </div>
                 <div className="edu-card">
                  <div>
                       <img src="/career-college-new-banner-1.jpg" alt="img"/>
                  </div>
                  <div  className="div2">
                   <h2>Higher Secondary School </h2>
                   <p>Shri Bhairavnath Junior College</p>
                   <h3>2022 - Completed</h3>
                  </div>
                   
                 </div>
                  <div className="edu-card">
                  <div>
                       <img src="/Screenshot_2025-05-22_162626.png" alt="img"/>
                  </div>
                  <div  className="div2">
                   <h2>Seconday School</h2>
                   <p>Shri Narayana Guru English Vidalaya</p>
                   <h3>2020 - Completed</h3>
                  </div>
                   
                 </div>
              
          </Container>
        </Box>
    )
}

export default Education;


// import React from "react";
// import { Box, Container } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import useScrollAnimation from "../useScrollAnimation";

// function Education() {
//   const [ref, isVisible] = useScrollAnimation();

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         overflow: "auto", // ✅ allow scroll on smaller screens
//         width: "100%",
//         backgroundColor: "#e1f3f3",
//       }}
//     >
//       <Container
//         maxWidth="md"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//           gap: "1rem",
//           alignItems: "center",
//         }}
//         ref={ref}
//         className={`section ${isVisible ? "show" : ""}`}
//       >
//         <div className="skil-head">
//           <SchoolIcon sx={{ fontSize: "3rem" }} />
//           <h1 id="edu-head">My Education</h1>
//         </div>

//         <div className="edu-card">
//           <div>
//             <img src="/1677603821phpcAro27.jpeg" alt="img" />
//           </div>
//           <div>
//             <h2>Bachelor Of Technology in Computer Engineering</h2>
//             <p>G.H Raisoni College of Engineering And Management</p>
//             <h3>2022-2026 | Pursuing</h3>
//           </div>
//         </div>

//         <div className="edu-card">
//           <div>
//             <img src="/career-college-new-banner-1.jpg" alt="img" />
//           </div>
//           <div>
//             <h2>Higher Secondary School </h2>
//             <p>Shri Bhairavnath Junior College</p>
//             <h3>2022 - Completed</h3>
//           </div>
//         </div>

//         <div className="edu-card">
//           <div>
//             <img src="/Screenshot_2025-05-22_162626.png" alt="img" />
//           </div>
//           <div>
//             <h2>Secondary School</h2>
//             <p>Shri Narayana Guru English Vidalaya</p>
//             <h3>2020 - Completed</h3>
//           </div>
//         </div>
//       </Container>

//       {/* ✅ Responsive fix without touching desktop styling */}
//       <style>
//         {`
//           @media (max-width: 600px) {
//             .edu-card {
//               display: flex;
//               flex-direction: column !important;
//               align-items: center;
//               text-align: center;
//               width: 100% !important;
//               box-sizing: border-box;
//               padding: 1rem;
//             }
//             .edu-card img {
//               width: 100% !important;
//               height: auto !important;
//               max-width: 300px;
//               border-radius: 8px;
//             }
//             .edu-card div {
//               width: 100%;
//             }
//           }
//         `}
//       </style>
//     </Box>
//   );
// }

// export default Education;
