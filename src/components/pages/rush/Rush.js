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
import {events} from './EventsList'


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
        color: "white"
    },
    divider: {
        height: 1,
        width: "70%"
    },
    mobile: {
        maxWidth: "90%"
    },
    desktop: {
        maxWidth: "65%"
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
        <Box mt={10} mb={10} className={classes.root}>
            <Box mb={2}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
                        Turn the Tide
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h5.fontSize">
                        Fall 2020 Recruitment
                    </Box>
                </Typography>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={8} mb={8} className={isMobile ? classes.mobile : classes.desktop}>
                <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                    {events.map((event, i) => (
                        <Grid item xs={isMobile ? 12 : 6}>
                        <RushEvent title={event.title} date={event.date} description={event.description}
                            dressCode={event.dressCode}
                        ></RushEvent>
                    </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={6}>
                <Button size="large" variant="contained" className={classes.button} component={Link} to="/faqs">
                    FAQs
                </Button>
            </Box>
            
            <Box mt={2}>
                <Typography component="div">
                    <Box fontWeight="fontWeightMedium" fontSize="h6.fontSize">
                        Stay tuned for our application!
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}
