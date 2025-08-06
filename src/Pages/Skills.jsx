// import React from "react";
// import { Box , Paper , Typography} from "@mui/material";
// import Grid from "@mui/material/Grid";
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
// import skills from "../data.js";
// import useScrollAnimation from "../useScrollAnimation";

// function Flow({img , text , height="5rem" , width="5rem"})
// {
//     return(
//         <React.Fragment>
//              <Grid item xs={6} sm={4} md={3} >
//                 <Paper sx={{textAlign:"center"  , backgroundColor:"#090976" ,  display:'flex',color:"floralwhite" ,alignItems:'center' , justifyContent:'center' ,transition:".3s ", "&:hover":{
//                     boxShadow:"10px 5px 8px darkblue"
//                 }} }>
//                    <div className="skil-img">
//                       <img src={img} alt="img" style={{height:height , width:width}}/>
//                       <h3>{text}</h3>
//                    </div>
//                 </Paper>
//             </Grid>
//         </React.Fragment>
//     )
// }

// function Skill()
// {
//      const [ref, isVisible] = useScrollAnimation();
//     return(
//         <Box sx={{height:"100vh" , width:"100%" , overflow:"hidden", background:"linear-gradient(to bottom , darkblue ,lightblue)" , display:"flex" , justifyContent:"center", color:"floralwhite" ,flexDirection:"column" , alignItems:"center" }} >
          
//             <div className="skil-head">
//                <DeveloperModeIcon fontSize="large" style={{color:"red"}}/>  <h1 style={{margin:'0.5rem'}}>Skills & Abilities</h1>
//             </div>
           
//           <Grid container maxWidth="md" spacing={2} flexGrow={1} margin="1rem" justifyContent="center" ref={ref} className={`section ${isVisible ? "show" : ""}`}>
           
//            { skills.map((skill , index)=>
//             (
//              <Flow key={index}  img={skill.img} text={skill.text} height={skill.height} width={skill.width}/>
//             ))}

            
//           </Grid>
//         </Box>
//     )
// }

// export default Skill;



import React from "react";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import skills from "../data.js";
import useScrollAnimation from "../useScrollAnimation";

function Flow({ img, text, height = "5rem", width = "5rem" }) {
  return (
    <React.Fragment>
      <Grid item xs={3} sm={4} md={3}>
        <Paper
          sx={{
            textAlign: "center",
            backgroundColor: "#090976",
            display: "flex",
            color: "floralwhite",
            alignItems: "center",
            justifyContent: "center",
            transition: ".3s",
            "&:hover": {
              boxShadow: "10px 5px 8px darkblue"
            },
            // ✅ Only for mobile
            "@media (max-width:600px)": {
              width:"5rem",
              height:"5rem",
              padding: "0.5rem"
            }
          }}
        >
          <div className="skil-img">
            <img
              src={img}
              alt="img"
              style={{
                height: height,
                width: width,
                maxWidth: "100%", // ✅ Prevents overflow
                display: "block",
                margin: "0 auto"
              }}
            />
            <h3
              style={{
                marginTop: "0.5rem",
                // ✅ Only shrink text for mobile
                fontSize: window.innerWidth <= 600 ? "0.7rem" : "1rem"
              }}
            >
              {text}
            </h3>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

function Skill() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <Box
      sx={{
        height: "100vh",
        width: {xs:"93%" , xl:"100%"},
        overflow: "hidden",
        background: "linear-gradient(to bottom , darkblue ,lightblue)",
        display: "flex",
        justifyContent: "center",
        color: "floralwhite",
        flexDirection: "column",
        alignItems: "center",
        
        "@media (max-width:600px)": {
          height: "auto",
          padding: "1rem"
        },
         "@media (min-width:601px) and (max-width:1250px)": {
          height: "auto",
          padding: "1rem",
          width:"100%"
        }

      }}
    >
      <div className="skil-head">
        <DeveloperModeIcon fontSize="large" style={{ color: "red" }} />{" "}
        <h1 style={{ margin: "0.5rem" }}>Skills & Abilities</h1>
      </div>

      <Grid
        container
        maxWidth="md"
        spacing={2}
        flexGrow={1}
        margin="1rem"
        justifyContent="center"
        ref={ref}
        className={`section ${isVisible ? "show" : ""}`}
      >
        {skills.map((skill, index) => (
          <Flow
            key={index}
            img={skill.img}
            text={skill.text}
            height={skill.height}
            width={skill.width}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Skill;







