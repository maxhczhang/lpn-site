import React, { useEffect } from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    paragraph: {
        maxWidth: "80%"
    },
    redSquare: {
        backgroundColor: "#DAD3BE",
        color: "white",
    },
    blueSquare: {
        backgroundColor: "#76726F",
        color: "white"
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white"
    },
}));

export default function Rush({ setPage }) {
    useEffect(() => {
        setPage("Rush")
    });

    const classes = useStyles();

    return (
        <Box mt={8} mb={8} className={classes.root}>
            <Box mb={2}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
                        Envison Excellence, Virtually lol
                    </Box>
                </Typography>
            </Box>

            <Grid container>
                <Grid item xs={3} className={classes.redSquare}>
                    <Box m={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Info Night
                            </Box>
                        </Typography>

                        <InfoIcon fontSize="large"></InfoIcon>
                    </Box>
                </Grid>

                <Grid item xs={3} className={classes.blueSquare}>
                    <Box m={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Meet the Bros
                            </Box>
                        </Typography>

                        <PeopleIcon fontSize="large"></PeopleIcon>
                    </Box>
                </Grid>

                <Grid item xs={3} className={classes.redSquare}>
                    <Box m={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Professional Night
                            </Box>
                        </Typography>

                        <BusinessCenterIcon fontSize="large"></BusinessCenterIcon>
                    </Box>
                </Grid>

                <Grid item xs={3} className={classes.blueSquare}>
                    <Box m={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Invite-Only Social
                            </Box>
                        </Typography>
                    
                        <MailIcon fontSize="large"></MailIcon>
                    </Box>
                </Grid>
            </Grid>

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
