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
        backgroundColor: "#001253",
        color: "white",
        height: "12vh",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    link: {
        color: "white"
    },
    button: {
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(255,255,255, 0.1)"
        }
    },
  });

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    <Grid item>
                        <a href="https://www.linkedin.com/company/lambdaphinu/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="medium" aria-label="LinkedIn" className={classes.button}>
                                <LinkedInIcon></LinkedInIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.facebook.com/lpnuci/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="medium" aria-label="Facebook" className={classes.button}>
                                <FacebookIcon></FacebookIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.youtube.com/channel/UCFUcgiGBvqJ3ORfWoa6GSLA" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="medium" aria-label="Youtube" className={classes.button}>
                                <YouTubeIcon></YouTubeIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.instagram.com/lpnuci/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            <IconButton size="medium" aria-label="Instagram" className={classes.button}>
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
        </div>
    )
}