import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { teal } from '@material-ui/core/colors';

import Grid from '@material-ui/core/Grid';

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
  });

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spaccing={5}>
                    <Grid item>
                        <a href="https://www.linkedin.com/company/lambdaphinu/" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="LinkedIn" style={{ fontSize: 40, color: '#000000'}}>
                                <LinkedInIcon></LinkedInIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.facebook.com/lpnuci/" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="Facebook" style={{fontSize: 40, color: '#000000'}}>
                                <FacebookIcon></FacebookIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.youtube.com/channel/UCFUcgiGBvqJ3ORfWoa6GSLA" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="Youtube" style={{ fontSize: 40, color: '#000000'}}>
                                <YouTubeIcon></YouTubeIcon>
                            </IconButton>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.instagram.com/lpnuci/" target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label="Instagram" style={{fontSize: 40, color: '#000000'}}>
                                <InstagramIcon></InstagramIcon>
                            </IconButton>
                        </a>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <Typography variant="subtitle2" gutterBottom>
                            For questions, contact ucilpn.ceo@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
