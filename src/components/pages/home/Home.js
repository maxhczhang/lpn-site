import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import { ParallaxBanner } from 'react-scroll-parallax';

import useWindowDimensions from '../../utils/WindowListener';
import colorLogo from '../../../assets/lpn_assets/logo.png';
import CoreValuesSeperator from '../../../assets/home/Values_Separator.jpg';
import HomeCoreValues from './HomeCoreValues';
import Companies from './Companies';
import MyCarousel from './MyCarousel'
import { carousel1photos } from './lists/Carousel1Photos';
import { carousel2photos } from './lists/Carousel2Photos';

// import Carousel from '../../utils/Carousel'
// import { companyLogos } from './lists/CompanyLogos';


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
        maxWidth: "60%"
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
    },
    carouselWidth: {
        maxWidth: "75%"
    },
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
        <Box mt={16} mb={16} className={classes.root}>

            <Typography component="div">
                <Box fontSize="h1.fontSize" fontWeight="fontWeightBold">
                    Our Legacy
                </Box>
                <Box fontWeight="fontWeightMedium" fontSize="h5.fontSize" mt={1}>
                    Grow Forward. Give Back.
                </Box>
            </Typography>           

            <Box mt={6} mb={14} className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" align="left">
                        We're a UC Irvine-founded business fraternity
                        for students seeking leadership development and coaching. We immerse our
                        members into an environment that emulates the professional world and form strong bonds that last from the first night of Pledge, to Commencement and beyond!
                        We love meeting new members, so feel free to reach out to any of our Active Brothers.
                    </Box>
                </Typography>

                <Box mt={6}>
                    <Button size="large" variant="contained" className={classes.button} component={Link} to="/active-brothers">
                        Meet Our Brothers
                    </Button>
                </Box>
            </Box>

            <Divider className={classes.divider}></Divider>
            <Box mt={14}></Box>

            <MyCarousel isMobile={isMobile} photos={carousel1photos} spacing={40}></MyCarousel>

            <Box mt={12} mb={10} className={classes.carouselWidth}>
                <Grid container spacing={10} direction="row" justifyContent="space-evenly">

                    <Grid item xs={cols}>
                        <Typography component="div" >
                            <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                                Professionalism
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} align="left">
                                With 12 years of history at UCI, we have an expansive network of alumni in different industries and companies.
                                Our Active and Alumni brothers help guide and support you to succeed in the professional world.
                            </Box>
                        </Typography>
                    </Grid>

                    {isMobile &&
                        <Grid item xs={cols}>
                            <Button size="large" variant="contained" className={classes.button} component={Link} to="/careers">
                            Careers
                            </Button>
                        </Grid>
                    }
                   
                    {isMobile && <Divider className={classes.divider}></Divider>}

                    <Grid item xs={cols}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
                                Brotherhood
                            </Box>
                            <Box fontSize="h6.fontSize" mt={2} align="left">
                                We aspire to become visionaries, influencers, and mobilizers. We help shape the next generation of business leaders,
                                all while taking care of our brothers, giving back to our community, and making memories.
                            </Box>
                        </Typography>
                    </Grid>

                    {!isMobile && 
                        <Grid item xs={cols}>
                            <Button size="large" variant="contained" className={classes.button} component={Link} to="/careers">
                                Careers
                            </Button>
                        </Grid>
                    }

                    <Grid item xs={cols}>
                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/gallery">
                            Gallery
                        </Button>
                    </Grid>
                   
                </Grid>
            </Box>

            <Box mt={4} mb={10}>
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
                    <Typography component="div">
                        <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                            Our Values
                        </Box>
                    </Typography>
                </div>
            </ParallaxBanner>

            <Box mt={16}></Box>

            <MyCarousel isMobile={isMobile} photos={carousel2photos} spacing={40}></MyCarousel>

            <Box mt={6} mb={14} className={classes.carouselWidth}>
                <HomeCoreValues isMobile={isMobile}></HomeCoreValues>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={14} align="center">
                <Typography component="div">
                    <Box fontSize={isMobile ? "h3.fontSize" : "h1.fontSize"} fontWeight="fontWeightBold" className={classes.paragraph}>
                        Where We've Worked
                    </Box>
                </Typography>

                <Box mt={6}>
                    <Companies isMobile={isMobile}></Companies>
                </Box>
            </Box>

            {/* <Carousel items={companyLogos}></Carousel> */}

        </Box>
    )
}
