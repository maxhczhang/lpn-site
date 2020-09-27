import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import Tooltip from '@material-ui/core/Tooltip';

import { Link } from "react-router-dom";

import useWindowDimensions from '../../WindowListener';
import RushEvent from './RushEvent'
import { events } from './EventsList'
import cover from '../../../assets/recruitment/Fall_Rush_Cover.png'


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
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" className={isMobile ? classes.content : classes.title}>
                        Turn The Tide
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
                        Fall 2020 Recruitment
                    </Box>
                </Typography>
            </Box>

            {/* <Tooltip title={
                <a href="https://www.freepik.com/vectors/floral" target="_blank" rel="noopener noreferrer" className={classes.link}>Floral vector created by macrovector - www.freepik.com"</a>
            }> */}
                <a href="https://www.facebook.com/events/1263372200663953" target="_blank" rel="noopener noreferrer">
                    <img src={cover} className={isMobile ? classes.coverMobile : classes.cover} alt="Fall Rush 2020"></img>
                </a>
            {/* </Tooltip> */}
           
            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                    As we close out 2020 and celebrate 10 years of Lambda Phi Nu, it is evident that we have grown and learned so much together as a brotherhood. We leaned on each other during these uncertain circumstances and quickly adapted to create a virtual recruitment and pledge process to help our community.
                </Box>
                <Box mt={6} mb={10} fontSize="h6.fontSize">
                    For us, it’s about caring for the UCI student body. It’s having the right tools and resources to navigate college and early career in an effective way. We hope that you will attend our recruitment events to learn about our fraternity, meet our Brothers, and become a part of the Omicron class to Turn The Tide onto a new chapter of your life!
                </Box>
            </Typography>

            <Divider className={classes.divider}></Divider>

            <Box mt={14} mb={14} className={classes.content}>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
                    {events.map((event, i) => (
                        <Grid item xs={isMobile ? 12 : 6} align="center">
                            <RushEvent event={event}></RushEvent>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={12}></Box>

            <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
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
            
            <Box mt={6} mb={6}>
                <Typography component="div">
                    <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                        Stay tuned for our Coffee Chat link and Application!
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}