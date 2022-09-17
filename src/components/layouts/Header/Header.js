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
import useWindowDimensions from '../../utils/WindowListener'


const useStyles = makeStyles((theme) => ({
  logo: {
    height: 70,
    width: 70,
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
    // paddingRight: 350,
    alignContent: "center",
    paddingRight: 25
  },
  appBarDark: {
    position: "relative",
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0.65)'
  },
  appBarClear: {
    position: "relative",
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0)'
  },
  joinButton: {
    backgroundColor: '#580C1F',
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: "rgb(150,74,93)"
    }
  },
  button: {
    color: "white",
    letterSpacing: 2,
    '&:hover': {
      backgroundColor: "rgb(0,0,0, 0.2)"
    }
    ,
    textDecoration: 'none'
  },
}));

// const recruitmentMenu = [
//   // {
//   //   title: "WINTER RUSH 2021",
//   //   url: "/recruitment"
//   // },
//   {
//     title: "FALL RUSH 2021",
//     url: "/recruitment"
//   },
//   {
//     title: "FALL RUSH 2020",
//     url: "/fall-rush-2020"
//   },
//   // {
//   //   title: "FAQS",
//   //   url: "/faqs"
//   // }
// ]

const brothersMenu = [
  {
    title: "ACTIVE BROTHERS",
    url: "/active-brothers"
  },
  {
    title: "CAMPUS INVOLVEMENT",
    url: "/campus-involvement"
  },
]


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
          <Grid container direction="row" justifyContent="space-between" alignItems="center" >
            <Grid item>
              <Link to="/">
                <img src={logo_white} className={isMobile ? classes.mobileLogo : classes.logo} alt="LPN"></img>
              </Link>
            </Grid>

            {/* {isMobile &&
              <Grid item>
                <Button variant="contained" size="medium" color="inherit" component={Link} to="/recruitment"
                  className={classes.joinButton}>
                  Join Us
                </Button>
              </Grid>
            } */}
          <div display="flex">
            {isMobile 
              ? <MobileMenu></MobileMenu>
              : <Grid item>
                <Box>

                  <Button size="large" className={classes.button} component={Link} to="/">Home</Button> 

                  <Button size="large" className={classes.button} component={Link} to="/about">About</Button> 

                  <MyMenu mainTitle="Brothers" menuItems={brothersMenu} buttonStyle={classes.button}></MyMenu>
                  
                  <Button size="large" className={classes.button} component={Link} to="/careers">Careers</Button>
      
                  {/* <MyMenu mainTitle="Recruitment" menuItems={recruitmentMenu} buttonStyle={classes.button}></MyMenu> */}
                  <Button size="large" className={classes.button} component={Link} to="/recruitment">Recruitment</Button>

                  <Button size="large" className={classes.button} component={Link} to="/gallery">Gallery</Button>
                  
                  <Button size="large" className={classes.button} component={Link} to="/contact">Contact</Button>

                  <Button size="large" className={classes.button} component={Link} to="/faqs">FAQ</Button>
                  <a href="http://tinyurl.com/lpnfallrush2022"> 
                    <Button style={{ textDecoration:'none' }} size="large" className={classes.button} >Apply</Button>
                  </a>
                  
                </Box>
              </Grid>
            }
          </div>
            {/* {!isMobile &&
              <Grid item>
                <Button variant="contained" size="large" color="inherit" component={Link} to="/recruitment"
                  className={classes.joinButton}>
                  Join Us
                </Button>
              </Grid>
            } */}
            
          </Grid>
        </div>

      </AppBar>
    )
}