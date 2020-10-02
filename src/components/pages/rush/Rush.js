import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Link } from "react-router-dom";

import useWindowDimensions from '../../WindowListener';
import RushEvent from './RushEvent'
import { events } from './EventsList'
import cover from '../../../assets/recruitment/Fall_Rush_Cover.png'
// import CTO from '../../../assets/actives/brothers/Astyr_Ko.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(150,74,93)"
        },
        width: 140
    },
    divider: {
        height: 1,
        width: "70%"
    },
    paragraph: {
        maxWidth: "60%",
    },
    cover: {
        marginTop: 60,
        marginBottom: 90,
        width: 945,
        height: 350,
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    coverMobile: {
        marginTop: 60,
        marginBottom: 90,
        maxWidth: "80%",
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    content: {
        maxWidth: "80%"
    },
    link: {
        textDecoration: "none",
        color: "white"
    },
    blackLink: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        '&:hover': {
            // backgroundImage: "linear-gradient(15deg, rgba(8,15,28,1) 0%, rgba(37,58,96,1) 45%, rgba(88,124,117,1) 100%)",
            // backgroundSize: "100%",
            // backgroundClip: "text",
            // backgroundColor: "black",
            // textFillColor: "transparent"
            color: "rgb(57,78,126)"
        }
    },
    maroonLink: {
        textDecoration: "none",
        color: "#580C1F",
        fontWeight: "bold",
        '&:hover': {
            color: "rgb(150,74,93)"
        }
    },
    image: {
        width: 333,
        height: 500,
    },
    CTOQuote: {
        maxWidth: "80%",
    }
}));


export default function Rush({ setPage }) {
    useEffect(() => {
        setPage("Rush")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={18} mb={18} className={classes.root}>
            <Box mb={3}>
                <Typography component="div" className={classes.root}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" className={isMobile ? classes.content : {}}>
                        <a href="https://youtu.be/uhJx-uoIBh0" target="_blank" rel="noopener noreferrer" className={classes.blackLink}>Turn The Tide</a>
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
                        Fall 2020 Recruitment
                    </Box>
                </Typography>
            </Box>
          
            <a href="https://www.facebook.com/events/1263372200663953" target="_blank" rel="noopener noreferrer">
                <img src={cover} className={isMobile ? classes.coverMobile : classes.cover} alt="Fall Rush 2020"></img>
            </a>
          
            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                    As we close out 2020 and celebrate 10 years of Lambda Phi Nu, it is evident that we have grown and learned so much together as a brotherhood. We leaned on each other during these uncertain circumstances and quickly adapted to create a virtual recruitment and pledge process to help our community.
                </Box>
                <Box mt={6} mb={10} fontSize="h6.fontSize">
                    For us, it’s about caring for the UCI student body. It’s having the right tools and resources to navigate college and early career in an effective way. We hope that you will attend our recruitment events to learn about our fraternity, meet our Brothers, and become a part of the Omicron class to Turn The Tide onto a new chapter of your life!
                </Box>
            </Typography>

            {/* <Box mt={12} mb={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <img src={CTO} alt="Chief Talent Officer" className={classes.image}></img>
                    </Grid>
                    <Grid item xs>
                        <Typography component="div" align="left" className={classes.CTOQuote}>
                            <Box fontSize="h6.fontSize" fontWeight={300}>
                                I’ve always loved fall as it brought cooler weather and signaled the holidays to come. Now as CTO, I’m excited for a new reason: Meeting dozens of UCI students for fall recruitment! Unfortunately, because of the pandemic, many opportunities and organizations have shut down, but not Lambda Phi Nu.
                            </Box>
                            <Box mt={2} fontSize="h6.fontSize" fontWeight={300}>
                                I’m so happy to say that we’re offering a world-class virtual recruitment and pledge process! We’ve created a digital experience with purpose-built activities and workshops that will give our Associates as enriching of an experience as they would’ve gotten being on campus. They’ll gain meaningful relationships while growing professionally to further their careers. I’m so proud and humbled by our amazing actives who are dedicated to making this the best quarter yet! Join us at our recruitment events to learn more about our brotherhood.
                            </Box>
                            <Box mt={2} fontSize="h6.fontSize" fontWeight="fontWeightMedium">
                                - Astyr Ko, Chief Talent Officer
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Box> */}

            <Divider className={classes.divider}></Divider>

            <Box mt={14} mb={14} className={classes.content}>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
                    {events.map((event, i) => (
                        <Grid item xs={isMobile ? 12 : 6} align="center">
                            <RushEvent event={event} isMobile={isMobile}></RushEvent>
                        </Grid>
                    ))}
                </Grid>
                
                <Typography component="div">
                    <Box fontweight="fontWeightMedium" fontSize="h5.fontSize" mt={12}>
                        Submit our <a href="https://forms.gle/YpEiTSAu8oy6j8xN6" target="_blank" rel="noopener noreferrer" className={classes.maroonLink}>application</a> by <b>October 14 at 11:59PM</b> to be considered for an interview!
                    </Box>
                </Typography>

            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={12} className={classes.content}>
                <Grid container direction="row" justify="center" alignItems="center" spacing={6}>
                    <Grid item>
                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/about">
                            Why LPN?
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/faqs">
                            FAQs
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            
        </Box>
    )
}