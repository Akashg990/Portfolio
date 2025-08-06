import React from "react";
import {Box , Container, Paper,Link } from '@mui/material';
import Grid from "@mui/material/Grid";
import useScrollAnimation from "../useScrollAnimation";
import EastIcon from '@mui/icons-material/East';

function Work()
{
    const [ref , isVisible] = useScrollAnimation();
    return(
        <Box  sx={{height:{xs:"27rem" , xl:"40rem"} , overflow:"hidden" , width:"100%" , background:"linear-gradient(to bottom , darkblue , purple)" , color:"floralwhite"}}>
            <Container maxWidth="md" sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}} ref={ref} className={`section ${isVisible?"show" :""}`}>
                   <h1>My Projects</h1>
                <Grid container maxWidth="md" columnSpacing={4} rowSpacing={6}flexGrow={1} >
                    <Grid item xs={2} sm={2} md={3}>
                       <Paper sx={{width:{xs:"10rem" , xl:"22rem"} , height:{xs:"8rem", xl:"15rem"}, transition:"0.6s ease-out ,transform 0.8s ease-out", "&:hover":{boxShadow:"10px 10px 20px rgb(2, 2, 92)", transform:"translate(-5px,-5px)"}}}>
                        <div className="work-card">
                            <img src="/0x0.png" alt="img"/>
                            <div className="p-work">
                                <p>Airbnb</p>
                                <Link href="https://web-project-wanderlust-1.onrender.com/home" target="_blank">
                                 <EastIcon/>
                                </Link>
                               
                            </div>
                            
                        </div>
                       </Paper>
                    </Grid>
                     <Grid item xs={6} sm={4} md={3}>
                       <Paper sx={{width:{xs:"10rem" , xl:"22rem"} , height:{xs:"8rem", xl:"15rem"}, transition:"0.6s ease-out ,transform 0.8s ease-out", "&:hover":{boxShadow:"10px 10px 20px rgb(2, 2, 92)", transform:"translate(-5px , -5px)"}}}>
                        <div className="work-card">
                            <img src="spotify.jpg" alt="img"/>
                            <div className="p-work">
                               <p>Spotify </p>
                               <EastIcon/>
                            </div>
                           
                        </div>
                       </Paper>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                       <Paper sx={{width:{xs:"10rem" , xl:"22rem"} , height:{xs:"8rem", xl:"15rem"}, transition:"0.6s ease-out ,transform 0.8s ease-out", "&:hover":{boxShadow:"10px 10px 20px rgb(2, 2, 92)", transform:"translate(-5px , -5px)"}}}>
                        <div className="work-card">
                            <img src="zerodha.png" alt="img"/>
                            <div className="p-work">
                            <p >Zerodha</p>
                            <EastIcon/>
                            </div>
                           
                        </div>
                       </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Work;