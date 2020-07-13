import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import logo_white from '../../../static/images/logo_white.png';
import MyMenu from './MyMenu'
import MobileMenu from './MobileMenu'
import useWindowDimensions from '../../WindowListener'

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  logo: {
    height: "10vh",
    marginLeft: theme.spacing(2),
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
    position: "relative",
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0.5)'
  },
  joinButton: {
    backgroundColor: '#580C1F',
    marginRight: theme.spacing(2),
  }
}));

export default function Header({ setPage, pageNum }) {
    const classes = useStyles();

    const { height, width } = useWindowDimensions();
    const isMobile = width < 700;
    
    return (
      <React.Fragment>
        
        <AppBar position='static' className={classes.appBar}>
          <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item>
                <Link to="/">
                  <img src={logo_white} className={classes.logo} alt="LPN"></img>
                </Link>
              </Grid>

              {isMobile &&
                <Grid item>
                  <Button variant="contained" size="medium" color="inherit" component={Link} to="/fall-rush-2020"
                    className={classes.joinButton}>
                    Join Us
                  </Button>
                </Grid>
              }

              {isMobile 
                ? <MobileMenu></MobileMenu>
                : <Grid item>
                  <Box>
                    <Button size="large" color="inherit" component={Link} to="/">Home</Button>

                    <Button size="large" color="inherit" component={Link} to="/about">About</Button>

                    <MyMenu mainTitle="Brothers" title1={"Active Brothers"} title2={"Campus Involvement"} setPage={setPage}></MyMenu>

                    <Button size="large" color="inherit" component={Link} to="/careers">Careers</Button>

                    <MyMenu mainTitle="Recruitment" title1={"Fall Rush 2020"} title2={"FAQs"} setPage={setPage}></MyMenu>

                    <Button size="large" color="inherit" component={Link} to="/gallery">Gallery</Button>

                    <Button size="large" color="inherit" component={Link} to="/contact">Contact</Button>
                  </Box>
                </Grid>
              }
            
              {!isMobile &&
                <Grid item>
                  <Button variant="contained" size="large" color="inherit" component={Link} to="/fall-rush-2020"
                  className={classes.joinButton}>
                  Join Us
                  </Button>
                </Grid>
              }
              
            </Grid>
          </div>
        </AppBar>
      </React.Fragment>
    )
}