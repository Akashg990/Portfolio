// import React from "react";
// import { AppBar, Toolbar , Typography  } from "@mui/material";
// import { Link } from "react-scroll";

// function Navbar()
// {
//     return(

//       <AppBar position="fixed" style={{backgroundColor:'white' , color:'black' }}>
//          <Toolbar style={{justifyContent:'space-between'}}>
//             <div className="navone"><h4>Logo</h4></div>
//             <div className="navtwo"><ul>
//                 <Link to="home" smooth={true} duration={500} spy={true}  offset={-70} activeClass="active"><li>Home</li></Link>
//                 <Link to="Aboutme" smooth={true} spy={true} offset={-70} activeClass="active" duration={500}><li>About me</li></Link>
//                  <Link to="skill" smooth={true} spy={true} offset={-70} activeClass="active" duration={500}>
//                   <li>Skills</li>
//                  </Link>
//                  <Link to="Education" smooth={true} spy={true} offset={-70} activeClass="active" duration={500}><li>Education</li></Link>
//                   <Link to="Work" smooth={true} spy={true} offset={-70} activeClass="active" duration={500}><li>Work</li></Link>
//                 <Link to="Contact" smooth={true} spy={true} offset={-80} activeClass="active" duration={500}><li>Contact</li></Link>
                
//              </ul></div>
//          </Toolbar>
  

//       </AppBar>











//         // <div className="nav ">
            
             
//         // </div>
//     )
// }

// export default Navbar;


import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "home" },
    { label: "About Me", to: "Aboutme" },
    { label: "Skills", to: "skill" },
    { label: "Education", to: "Education" },
    { label: "Work", to: "Work" },
    { label: "Contact", to: "Contact" },
  ];

  return (
    <>
      <AppBar
        
        sx={{
          backgroundColor: "white",
          color: "black",
          width: "100%",
          overflow: "hidden",
          position:{xs:"sticky" , xl:"fixed"},
          padding:{xs:"0", xl:"0 1rem 0 1rem"}
        }}
        elevation={1}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 1, sm: 2 },
            minHeight: "56px",
          }}
        >
          {/* Logo */}
          <Typography
            
            sx={{
             
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <img src="/logo.png " alt="img" className="logo"/>
          </Typography>

          {/* Desktop Menu */}
          <Box
            component="ul"
            sx={{
              display: { xs: "none", md: "flex" },
              listStyle: "none",
              gap: 3,
              m: 0,
              p: 0,
              
            }}
          >
            {menuItems.map((item, index) => (
              <li key={index} style={{ cursor: "pointer" }}>
                <Link
                  to={item.to}
                  smooth
                  spy
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: 700,
                    paddingBottom: "4px",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 220 } }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setOpen(false)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText>
                <Link
                  to={item.to}
                  smooth
                  spy
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Active link underline */}
      <style>
        {`
          .active {
            border-bottom: 2px solid #1976d2;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
