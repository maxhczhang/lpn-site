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
        maxWidth: "80%"
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
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Turn The Tide
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1}>
                        Fall 2020 Recruitment
                    </Box>
                </Typography>
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={10} mb={10} className={classes.paragraph}>
                <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
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
