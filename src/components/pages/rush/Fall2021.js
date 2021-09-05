import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Link } from "react-router-dom";

import useWindowDimensions from '../../utils/WindowListener';
import RushEvent from './RushEvent'
import { events } from './FallEvents2'
import flyer from '../../../assets/recruitment/Fall_2021_Cover.png'


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
        backgroundColor: "rgb(39, 34, 98)",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(39, 57, 141)"
        },
        width: 150
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
        width: 735,
        height: 500,
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
        background: "linear-gradient(350deg, rgba(16, 9, 23, 1) 0%, rgba(117, 88, 198, 1) 50%, rgba(42, 62, 149, 1) 100%)",
        color: "white",
        width: 350,
    },
    mobileCard: {
        background: "linear-gradient(6deg, rgba(16, 9, 23, 1) 0%, rgba(117, 88, 198, 1) 50%, rgba(42, 62, 149, 1) 100%)",
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
                        <a href="https://youtu.be/44pkNiN451A" target="_blank" rel="noopener noreferrer" className={classes.highlightLink}>Illuminate</a>
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
                        Rho Class Recruitment
                    </Box>
                </Typography>
            </Box>

            <a href="https://www.facebook.com/events/4276985875651619" target="_blank" rel="noopener noreferrer">
                <img src={flyer} className={isMobile ? classes.coverMobile : classes.cover} alt="Winter Rush 2020"></img>
            </a>

            <Divider className={classes.divider}></Divider>

            {/* <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                    2020 was a year of change - everything became virtual, and we had to adapt to a new normal, changing our lives forever for better or worse. Whether we thrived in this online learning environment, struggled with the disconnect from others, or missed meaningful milestones in our lives, we all experienced it together. This year was challenging to say the least, but as we begin the new year, the brothers of Lambda Phi Nu are optimistic for the opportunities it’ll bring and the new memories we’ll make!
                </Box>
                <Box mt={6} mb={6} fontSize="h6.fontSize">
                    We want to dream big and look toward a year of possibilities: a year where we start our careers, discover our passions, learn how to cook our first college meals, and find another group of ambitious, driven individuals to join our Pi class starting on January 5th. We hope to see you there as we Venture Beyond the constraints of 2020 and discover tomorrow's innovators, leaders, and life-long brothers!  
                </Box>
                <Box mb={10} fontSize="h6.fontSize">
                    Thank you to all the candidates who participated in our Winter 2021 recruitment, and a special congratulations to our newest Associates! To those who unfortunately did not receive a bid, the Brothers of Lambda Phi Nu will be eagerly awaiting you this Fall.
                </Box>
            </Typography> */}

            <Divider className={classes.divider}></Divider>

            <Box mt={14} mb={14} className={classes.content}>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
                    {events.map((event, i) => (
                        <Grid item xs={isMobile ? 12 : 6} align="center">
                            <RushEvent event={event} cardStyle={isMobile ? classes.mobileCard : classes.card}></RushEvent>
                        </Grid>
                    ))}
                </Grid>

                {/* <Box mt={14}></Box>
                <Button size="large" variant="contained" disabled className={classes.button} href="https://docs.google.com/forms/d/e/1FAIpQLSdioJmOesXHmABTxHibmf4u4ThT30uPT1jbq857GiQvr_JtIg/viewform?usp=sf_link" target="_blank">Apply Now</Button>
                
                <Typography component="div">
                    <Box fontweight="fontWeightMedium" fontSize="h5.fontSize" mt={8}>
                        Our rush events have ended and our application has closed for this recruitment cycle!
                    </Box>
                </Typography> */}
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