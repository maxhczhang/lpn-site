import React from 'react'

import HeaderContent from './HeaderContent'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import sfSkyline from '../../static/images/sf_skyline2.jpg'
import logo_white from '../../static/images/logo_white.png';
import seniors from '../../static/images/seniors.jpg'
import merage_at_night from '../../static/images/merage_at_night.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: "100vh",
    backgroundImage: `url(${sfSkyline})`
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  topGrid: {
    flexGrow: 1,
  },
  logo: {
    height: "8vmin",
  },
  link: {
    color: "white"
  }
}));

export default function Header({setPageNum, pageNum}) {
    const classes = useStyles();
    var bckStyle;

    if (pageNum === 0) {
      bckStyle = {
        flexGrow: 1,
        color: "white",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: "100vh",
        backgroundImage: `url(${sfSkyline})`
      }
    } else if (pageNum === 1) {
      bckStyle = {
        flexGrow: 1,
        color: "white",
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: "100vh",
        backgroundImage: `url(${seniors})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    } else {
      bckStyle = {
        flexGrow: 1,
        color: "white",
        width: '100vw',
        height: "40vh",
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${merage_at_night})`
      }
    }
    
    return (
        <div style={bckStyle}>

          <Grid container spacing={2}>
            <Grid item>
              <img src={logo_white} className={classes.logo} alt="LPN"></img>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs>
              <Typography component="div">
                <Box fontSize="h1.fontSize" fontWeight="fontWeightMedium">
                  ΛΦΝ
                </Box>
               
                <Box>
                  <Button size="large" color="inherit" onClick={(event) => setPageNum(0)}>Home</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(1)}>About Us</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(2)}>Brotherhood</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(3)}>Leadership</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(4)}>Careers</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(5)}>Recruitment</Button>

                  <a href="https://www.facebook.com/lpnuci/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    <IconButton aria-label="Facebook" color="inherit">
                      <FacebookIcon></FacebookIcon>
                    </IconButton>
                  </a>
                  <a href="https://www.instagram.com/lpnuci/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    <IconButton aria-label="Instagram" color="inherit">
                      <InstagramIcon></InstagramIcon>
                    </IconButton>
                  </a>
                </Box>

                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <HeaderContent pageNum={pageNum}></HeaderContent>
         
        </div>
    )
}
