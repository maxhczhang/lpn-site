import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { ParallaxBanner } from 'react-scroll-parallax';

import Companies from './Companies';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import EYInterviews from '../../../static/images/darkenedEYInterviews.jpeg'
import colorLogo from '../../../static/images/logo.png'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    logo: {
        height: "20vh",
    },
    interviews: {
        position: "relative",
        zIndex: 1,
        color: "white",
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#003273",
        color: "white"
    },
    paragraph: {
        maxWidth: "60%"
    },
}));

export default function Home({ setPage }) {

    useEffect(() => {
        setPage("Home")
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
        
            <Box mt={6}>
                <Typography>
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium">
                        Our Legacy
                    </Box>
                    <Box fontSize="body1.fontSize" fontWeight="fontWeightMedium">
                        Grow Forward. Give Back.
                    </Box>
                </Typography>
            </Box>
            
            <Divider></Divider>

            <Box mt={2} mb={2} className={classes.paragraph}>
                <Typography variant="body1">
                    We're a UC Irvine founded business leadership fraternity
                    community for students seeking leadership development and coaching. We immerse our 
                    members into an environment that emulates the professional world to prepare them for a 
                    more successful future.
                </Typography>

                <Box mt={4}>
                    <Button variant="contained" className={classes.button}>
                        Meet Our Brothers
                    </Button>
                </Box>
            </Box>

            <Divider></Divider>

            <Box mb={6}>
                <img className={classes.logo} src={colorLogo} alt="LPN"></img>  
            </Box>
              
            <ParallaxBanner
                style={{
                    height: "60vh",
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                }}
                layers={[
                    {
                        image: `url(${EYInterviews})`,
                        amount: 0.2,
                        props: {
                            style: {
                                backgroundImage: `url(${EYInterviews})`,
                            }
                        },
                    },
                ]}
            >
                <div className={classes.interviews}>
                    <Typography variant="h3">
                        <Box fontWeight="fontWeightBold">
                            We accept all majors!
                            </Box>
                    </Typography>
                </div>
            </ParallaxBanner>

            <Box m={4}>
                <Typography>
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium">
                        Where We Work
                    </Box>
                </Typography>
                <Divider></Divider>
                <Companies></Companies>
            </Box>

        </div>
    )
}
