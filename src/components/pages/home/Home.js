import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ParallaxBanner } from 'react-scroll-parallax';
import { Link } from "react-router-dom";

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
        height: "18vh",
        width: "18vh"
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
        maxWidth: "80%"
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
                <Typography component="div">
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                        Our Legacy
                    </Box>
                    <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                        Grow Forward. Give Back.
                    </Box>
                </Typography>
            </Box>
            
            <Divider></Divider>

            <Box mt={2} mb={4} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize">
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

            <Divider style={{height: 1, width: "60%"}}></Divider>

            <Box mt={2} className={classes.paragraph}>
                <Grid container spacing={10} direction="row" justify="space-evenly" >
                    <Grid item xs={6}>
                        <Typography component="div" >
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Professionalism
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} mb={2}>
                                With 10 years of history, we have an expansive network of alumni in different industries and companies. 
                                Our active and alumni brothers help guide and support you to succeed in the professional world. 
                            </Box>
                        </Typography>

                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/careers">
                            Careers
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Brotherhood
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} mb={2}>
                                We aspire to become visionaries, influencers, and mobilizers. This means we dream big, rally support, and get it done,
                                all while taking care of our brothers, giving back to our community, and making memories.
                            </Box>
                        </Typography>

                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/gallery">
                            Gallery
                        </Button>
                    </Grid>
                </Grid>
            </Box>


            <Box mb={6}>
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

            <Box mt={6} mb={6} align="center">
                <Typography component="div">
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
                        Where We Work
                    </Box>
                </Typography>
                <Divider style={{width: "50%"}}></Divider>
                <Companies></Companies>
            </Box>

        </div>
    )
}
