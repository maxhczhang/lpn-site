import React from 'react'

import HeaderContent from './HeaderContent'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import logo_white from '../../../static/images/logo_white.png';


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

export default function Header({ setPageNum, pageNum }) {
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
                  <Button size="large" color="inherit" onClick={(event) => setPageNum(0)}>Home</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(1)}>About</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(2)}>Brotherhood</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(3)}>Leadership</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(4)}>Careers</Button>
                  <Button size="large"color="inherit" onClick={(event) => setPageNum(5)}>Recruitment</Button>
                </Box>

                </Typography>
        
            </Grid>
          </Grid>
          
          <HeaderContent pageNum={pageNum}></HeaderContent>
         
        </div>
    )
}