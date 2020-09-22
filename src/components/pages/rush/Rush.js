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
        }
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

            <a href="https://www.facebook.com/events/1263372200663953" target="_blank" rel="noopener noreferrer">
                <img src={cover} className={isMobile ? classes.coverMobile : classes.cover} alt="Fall Rush 2020"></img>
            </a>

            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                    While last year was spent looking back at the 10 years passed since Lambda Phi Nu's founding, this year kept all our Active Brothers alert, constantly looking forward to meet the next challenge.
                    As a result, our Talent Team was well-positioned to craft a new Rush and Pledge process for the incoming Omicron Class.  
                </Box>
                <Box mt={6} mb={10} fontSize="h6.fontSize">
                    We hope you will attend our Rush events to learn more about LPN, meet our Brothers, 
                    and decide to become a part of this new class, one shaped by 2020's adversity but eager to Turn The Tide onto a new chapter in their lives!
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

            <Box mt={10}>
                <Button size="large" variant="contained" className={classes.button} component={Link} to="/faqs">
                    FAQs
                </Button>
            </Box>
            
            <Box mt={6}>
                <Typography component="div">
                    <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                        Stay tuned for our Coffee Chat link and Application!
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}