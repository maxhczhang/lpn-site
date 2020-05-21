import React from 'react'

import HeaderContent from './HeaderContent'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import logo_white from '../../../static/images/logo_white.png';

import MyMenu from './MyMenu'


const useStyles = makeStyles((theme) => ({
  logo: {
    height: "8vmin",
  },
  link: {
    color: "white"
  },
  root: {
    position: "relative",
    zIndex: 1,
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  }
}));

export default function Header({ setPage, pageNum }) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item>
              <img src={logo_white} className={classes.logo} alt="LPN"></img>
            </Grid>
            <Grid item>
              
              <Typography component="div">

                <Box mt={4}>
                  <Button size="large" color="inherit" onClick={(event) => setPage("Home")}>Home</Button>
                  
                  <Button size="large"color="inherit" onClick={(event) => setPage("About")}>About</Button>
                  
                  <MyMenu title1={"Active Brothers"} title2={"Campus Involvement"} setPage={setPage}></MyMenu>
                  
                  <Button size="large"color="inherit" onClick={(event) => setPage("Careers")}>Careers</Button>
                            
                  <MyMenu title1={"Fall Rush 2020"} title2={"FAQs"} setPage={setPage}></MyMenu>
                 
                  <Button size="large"color="inherit" onClick={(event) => setPage("Gallery")}>Gallery</Button>
                  
                  <Button size="large" color="inherit" onClick={(event) => setPage("Contact")}>Contact</Button>
                </Box>

                </Typography>
        
            </Grid>
          </Grid>
          
          <HeaderContent pageNum={pageNum}></HeaderContent>
        </div>
    )
}