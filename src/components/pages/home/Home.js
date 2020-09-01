import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import { ParallaxBanner } from 'react-scroll-parallax';

import useWindowDimensions from '../../WindowListener';
import colorLogo from '../../../assets/lpn_assets/logo.png';
import CoreValuesSeperator from '../../../assets/home/tri_punch.jpg';
import HomeCoreValues from './HomeCoreValues';
import Companies from './Companies';
import MyCarousel from './MyCarousel'
import { carousel1photos } from './lists/Carousel1Photos';
import { carousel2photos } from './lists/Carousel2Photos';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    logo: {
        height: 200,
        width: 200
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
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(150,74,93)"
        }
    },
    paragraph: {
        maxWidth: "70%"
    },
    divider: {
        height: 1,
        width: "70%"
    },
    topImages: {
        float: "left",
        width: 300,
        height: 300,
        objectFit: 'cover',
    }
}));


export default function Home({setPage}) {
    useEffect(() => {
        setPage("Home")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;
    let cols;
    if (isMobile) {
        cols = 12;
    } else {
        cols = 6;
    }

    return (
        <Box mt={8} mb={8} className={classes.root}>

            <Box mb={1}>
                <Typography component="div">
                    <Box fontSize="h2.fontSize" fontWeight="fontWeightBold">
                        Our Legacy
                    </Box>
                    <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                        Grow Forward. Give Back.
                    </Box>
                </Typography>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={4} mb={6} className={classes.paragraph}>
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

            <MyCarousel isMobile={isMobile} photos={carousel1photos}></MyCarousel>

            <Box mt={6} mb={6} className={classes.paragraph}>
                <Grid container spacing={10} direction="row" justify="space-evenly" >
                    <Grid item xs={cols}>
                        <Typography component="div" >
                            <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                                Professionalism
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} mb={2} style={{ textAlign: "left" }}>
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

                    {isMobile && <Divider className={classes.divider}></Divider>}

                    <Grid item xs={cols}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                                Brotherhood
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} mb={2} style={{ textAlign: "left" }}>
                                We aspire to become visionaries, influencers, and mobilizers. We help shape the next generation of business leaders,
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

            <Divider className={classes.divider}></Divider>

            <Box mt={4} mb={8}>
                <img className={classes.logo} src={colorLogo} alt="LPN"></img>
            </Box>

            <ParallaxBanner
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                layers={[
                    {
                        image: `url(${CoreValuesSeperator})`,
                        amount: 0.2,
                        props: {
                            style: {
                                backgroundImage: `url(${CoreValuesSeperator})`,
                            }
                        },
                    },
                ]}
            >
                <div className={classes.interviews}>
                    <Typography variant="h3">
                        <Box fontWeight="fontWeightBold">
                            Our Values
                        </Box>
                    </Typography>
                </div>
            </ParallaxBanner>

            <Box mt={8}></Box>

            <MyCarousel isMobile={isMobile} photos={carousel2photos} spacing={40}></MyCarousel>

            <Box mt={4} mb={6} className={classes.paragraph}>
                <HomeCoreValues isMobile={isMobile}></HomeCoreValues>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={6} align="center">
                <Typography component="div">
                    <Box fontSize="h2.fontSize" fontWeight="fontWeightBold" className={classes.paragraph}>
                        Where We've Worked
                    </Box>
                </Typography>

                <Box mt={2}>
                    <Companies isMobile={isMobile}></Companies>
                </Box>
            </Box>

        </Box>
    )
}
