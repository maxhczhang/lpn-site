import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import { Link } from "react-router-dom";

import logo_white from '../../../assets/lpn_assets/logo_white.png';
import MyMenu from './MyMenu'
import MobileMenu from './MobileMenu'
import useWindowDimensions from '../../WindowListener'


const useStyles = makeStyles((theme) => ({
  logo: {
    height: 100,
    width: 100,
    marginLeft: theme.spacing(2),
  },
  mobileLogo: {
    height: 80,
    width: 80,
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
  appBarDark: {
    position: "relative",
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0.5)'
  },
  appBarClear: {
    position: "relative",
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0)'
  },
  joinButton: {
    backgroundColor: '#580C1F',
    marginRight: theme.spacing(2),
  }
}));


export default function Header({ pageNum }) {
    const classes = useStyles();

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    let appBarClass;
    let elevation;

    if (pageNum === 2 || pageNum === 5 || pageNum === 6 || pageNum > 7) {
      appBarClass = classes.appBarDark
      elevation = 4;
    }
    else {
      appBarClass = classes.appBarClear
      elevation = 0
    }

    return (
      <AppBar position='static' className={appBarClass} elevation={elevation}>
        
        <div className={classes.root}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Link to="/">
                <img src={logo_white} className={isMobile ? classes.mobileLogo : classes.logo} alt="LPN"></img>
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
                  <MyMenu mainTitle="Brothers" title1={"Active Brothers"} title2={"Campus Involvement"}></MyMenu>
                  <Button size="large" color="inherit" component={Link} to="/careers">Careers</Button>
                  <MyMenu mainTitle="Recruitment" title1={"Fall Rush 2020"} title2={"FAQs"}></MyMenu>
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
    )
}