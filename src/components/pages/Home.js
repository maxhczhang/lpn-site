import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Companies from './home/Companies';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import EYInterviews from '../../static/images/darkenedEYInterviews.jpeg'
import colorLogo from '../../static/images/logo.png'


const useStyles = makeStyles((theme) => ({
    root: {
       flexGrow: 1,
       alignItems: "center"
    },
    first: {
        flexGrow: 1,
        maxWidth: "80vh"
    },
    logo: {
        height: "20vmin",
    },
    backgroundImg: {
        flexGrow: 1,
        color: "white",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: "60vh",
        backgroundImage: `url(${EYInterviews})`,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundPosition: "center",
    },
}));

export default function Home() {
    const classes = useStyles();
        
    return (
        <div className={classes.root}>
            <Box className={classes.first} mx="auto" p={6}>
                <Box m={2}>
                    <Typography variant="h3">Our Legacy</Typography>
                </Box>
            
            <Divider/>

            <Box m={2}>
                <Typography variant="body1">We're a UC Irvine founded business leadership fraternity
                    community for students seeking leadership development and coaching. We immerse our members into an environment that emulates the professional world to prepare them for a more successful future.
                </Typography>
            </Box>
            <Box mt={1}>
                   <img className={classes.logo} src={colorLogo} alt="LPN"></img>
                </Box>
            </Box>

            <div className={classes.backgroundImg}>
                <Box className={classes.ting}>
                    <Typography variant="h3"> 
                        <Box fontWeight="fontWeightBold">
                            We accept all majors!
                        </Box>
                    </Typography>
                </Box>
            </div>

            <Box m={6}>
                <Typography component="div">
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium">
                        Where We Work
                    </Box>
                </Typography>
                <Companies></Companies>
            </Box>

        </div>
    )
}
