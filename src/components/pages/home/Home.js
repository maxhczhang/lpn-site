import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from "react-router-dom";

import useWindowDimensions from '../../WindowListener'
import Companies from './Companies';
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
        width: "20vh"
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
        backgroundColor: "#580C1F",
        color: "white"
    },
    paragraph: {
        maxWidth: "80%"
    },
}));

export default function Home({ setPage }) {
    useEffect(() => {
        setPage("Home")
    });

    const classes = useStyles();

    const { height, width } = useWindowDimensions();
    const isMobile = width < 700;
    let cols;
    if (isMobile) {
        cols = 12;
    } else {
        cols = 6;
    }

    return (
        <Box mt={8} mb={8} className={classes.root}>
        
            <Typography component="div">
                <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                    Our Legacy
                </Box>
                <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                    Grow Forward. Give Back.
                </Box>
            </Typography>   

            <Box mt={2} mb={6} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" style={{ textAlign: "center" }}>
                        We're a UC Irvine founded business leadership fraternity
                        community for students seeking leadership development and coaching. We immerse our 
                        members into an environment that emulates the professional world to prepare them for a 
                        more successful future.
                    </Box>
                </Typography>

                <Box mt={4}>
                    <Button size="large" variant="contained" className={classes.button} component={Link} to="/active-brothers">
                        Meet Our Brothers
                    </Button>
                </Box>
            </Box>

            <Divider style={{height: 1, width: "70%"}}></Divider>

            <Box mt={6} mb={6} className={classes.paragraph}>
                <Grid container spacing={10} direction="row" justify="space-evenly" >
                    <Grid item xs={cols}>
                        <Typography component="div" >
                            <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                                Professionalism
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} mb={2} style={{textAlign: "left"}}>
                                With 10 years of history, we have an expansive network of alumni in different industries and companies. 
                                Our active and alumni brothers help guide and support you to succeed in the professional world. 
                            </Box>
                        </Typography>

                        <Box mt={4}>
                            <Button size="large" variant="contained" className={classes.button} component={Link} to="/careers">
                                Careers
                            </Button>
                        </Box>
                    </Grid>

                    {isMobile && <Divider style={{ height: 1, width: "70%" }}></Divider>}

                    <Grid item xs={cols}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                                Brotherhood
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} mb={2} style={{ textAlign: "left" }}>
                                We aspire to become visionaries, influencers, and mobilizers. This means we dream big, rally support, and get it done,
                                all while taking care of our brothers, giving back to our community, and making memories.
                            </Box>
                        </Typography>

                        <Box mt={4}>
                            <Button size="large" variant="contained" className={classes.button} component={Link} to="/gallery">
                                Gallery
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Divider style={{ height: 1, width: "70%" }}></Divider>

            <Box mt={4} mb={8}>
                <img className={classes.logo} src={colorLogo} alt="LPN"></img>  
            </Box>
              
            <ParallaxBanner
                style={{
                    height: '50vh',
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

            <Box mt={8} align="center">
                <Typography component="div">
                    <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                        Where We Work
                    </Box>
                </Typography>
                <Divider style={{width: "50%"}}></Divider>
                <Companies></Companies>
            </Box>

        </Box>
    )
}
