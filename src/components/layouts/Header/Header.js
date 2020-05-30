import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import logo_white from '../../../static/images/logo_white.png';

import { Link } from "react-router-dom";

import MyMenu from './MyMenu'


const useStyles = makeStyles((theme) => ({
  logo: {
    height: "12vh",
  },
  link: {
    color: "white"
  },
  root: {
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  appBar: {
    backgroundColor: 'rgb(0,0,0,0.5)'
  },
  joinButton: {
    backgroundColor: '#003273'
  }
}));

export default function Header({ setPage, pageNum }) {
    const classes = useStyles();
    
    return (
      <React.Fragment>
        <AppBar position='static' className={classes.appBar}>
          <div className={classes.root}>
            <Grid container direction="row" justify="space-evenly" alignItems="center">
              <Grid item>
                <Link to="/">
                  <img src={logo_white} className={classes.logo} alt="LPN"></img>
                </Link>
              </Grid>

              <Grid item>
                <Box>
                  <Button size="large" color="inherit" component={Link} to="/">Home</Button>
                  
                  <Button size="large"color="inherit" component={Link} to="/about">About</Button>
                  
                  <MyMenu mainTitle="Brothers" title1={"Active Brothers"} title2={"Campus Involvement"} setPage={setPage}></MyMenu>
                  
                  <Button size="large" color="inherit" component={Link} to="/careers">Careers</Button>
                            
                  <MyMenu mainTitle="Recruitment" title1={"Fall Rush 2020"} title2={"FAQs"} setPage={setPage}></MyMenu>
                
                  <Button size="large" color="inherit" component={Link} to="/gallery">Gallery</Button>
                  
                  <Button size="large" color="inherit" component={Link} to="/contact">Contact</Button>
                </Box>
              </Grid>

              <Grid item>
                <Button variant="contained" size="large" color="inherit" component={Link} to="/fall-rush-2020" 
                    className={classes.joinButton}>
                      Join Us
                </Button>
              </Grid>

            </Grid>
          </div>
        </AppBar>
      </React.Fragment>
    )
}