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
import { events } from './WinterEvents'
import flyer from '../../../assets/recruitment/Winter2021_Flyer.jpg'
// bright red: #F34532
// blue: #2E4475
// black: #080A09


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
        width: 552,
        height: 800,
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
    highlightLink: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        '&:hover': {
            color: "#A92C26"
        }
    },
    highlightText: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        '&:hover': {
            color: "#A92C26"
        }
    },
    image: {
        width: 333,
        height: 500,
    },
    card: {
        background: "linear-gradient(350deg, rgba(243,69,50,1) 0%, rgba(46,68,117,1) 50%, rgba(0,0,0,1) 100%)",
        color: "white",
        width: 350,
    },
    mobileCard: {
        background: "linear-gradient(6deg, rgba(243,69,50,1) 0%, rgba(46,68,117,1) 50%, rgba(0,0,0,1) 100%)",
        color: "white",
        width: "95%",
    },
}));


export default function Winter2021({ setPage }) {
    useEffect(() => {
        setPage("WinterRush2021")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={12} mb={18} className={classes.root}>
            <Box mb={2}>
                <Typography component="div" className={classes.root}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" className={isMobile ? classes.content : {}}>
                        <a href="https://youtu.be/uhJx-uoIBh0" target="_blank" rel="noopener noreferrer" className={classes.highlightLink}>Venture Beyond</a>
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h3.fontSize" mt={1} className={classes.content}>
                        Π Class Recruitment
                    </Box>
                </Typography>
            </Box>

            <a href="https://www.facebook.com/events/1263372200663953" target="_blank" rel="noopener noreferrer">
                <img src={flyer} className={isMobile ? classes.coverMobile : classes.cover} alt="Winter Rush 2020"></img>
            </a>

            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                    2020 was a year none of us will forget for a long time to come. Too many of us lived through 'unprecedented' times, missed out on meaningful experiences, and felt disconnected from others. However, the Brothers of Lambda Phi Nu want 2021 to be different, in the best possible way!
                </Box>
                <Box mt={6} mb={6} fontSize="h6.fontSize">
                    We want to dream big and imagine a new year full of possibilities, a year where we'll start our first full-time jobs, learn how to cook our first dish away from home, and perform our first back-to-back virtual recruitment cycle starting January 5. We hope to see you there as we Venture Beyond the constraints of 2020 and discover tomorrow's innovators, leaders, and life-long brothers!  
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
                            <RushEvent event={event} cardStyle={isMobile ? classes.mobileCard : classes.card}></RushEvent>
                        </Grid>
                    ))}
                </Grid>

                <Typography component="div">
                    {/* <Box fontweight="fontWeightMedium" fontSize="h5.fontSize" mt={12}>
                        Submit our <a href="https://forms.gle/YpEiTSAu8oy6j8xN6" target="_blank" rel="noopener noreferrer" className={classes.maroonLink}>application</a> by <b>October 14 at 11:59PM</b> to be considered for an interview!
                    </Box> */}
                    <Box fontweight="fontWeightMedium" fontSize="h5.fontSize" mt={12}>
                        Stay tuned for our application!
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