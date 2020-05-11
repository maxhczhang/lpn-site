import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles({
    root: {
    //   border: 0,
    //   borderRadius: 3,
    //   boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      color: 'black',
      flexGrow: 1,
      height: "10vmin",
      //padding: '0 30px',
    },
    link: {
        color: "black"
    }
  });

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item>
                        <a href="https://www.linkedin.com/company/lambdaphinu/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="large" aria-label="LinkedIn" color="inherit">
                                <LinkedInIcon></LinkedInIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.facebook.com/lpnuci/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="large" aria-label="Facebook" color="inherit">
                                <FacebookIcon></FacebookIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.youtube.com/channel/UCFUcgiGBvqJ3ORfWoa6GSLA" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="large" aria-label="Youtube" color="inherit">
                                <YouTubeIcon></YouTubeIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.instagram.com/lpnuci/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="large" aria-label="Instagram" color="inherit">
                                <InstagramIcon></InstagramIcon>
                            </IconButton>
                        </a>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <Typography component="div">
                            <Box fontSize="subtitle1.fontSize" fontWeight="fontWeightMedium">
                                Connect with us to learn more.
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}