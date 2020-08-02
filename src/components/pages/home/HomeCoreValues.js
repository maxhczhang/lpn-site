import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white"
    },
    image: {
        // float: "left",
        width: 200,
        height: 150,
        // objectFit: 'scale-down',
        backgroundColor: "grey"
    }
}));

export default function HomeCoreValues() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
                <Grid item xs={4}>
                    <div className={classes.image}></div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.image}></div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.image}></div>
                </Grid>

                <Grid item xs={4}>

                    <Typography variant="h6">Excellence</Typography>
                    <Typography variant="body1">I wish I could excel at writing descriptions about our Core Values.</Typography>
                </Grid>
                <Grid item xs={4}>
                  
                    <Typography variant="h6">Relationships</Typography>
                    <Typography variant="body1">I think being in a relationship would be pretty cool, maybe I should plug my Tinder.</Typography>
                </Grid>
                <Grid item xs={4}>
                   
                    <Typography variant="h6">Altruism</Typography>
                    <Typography variant="body1">I altruistically donate my weekends to the Brotherhood to complete this site.</Typography>
                </Grid>
            </Grid>

            <Box mt={4}>
                <Button size="large" variant="contained" className={classes.button} component={Link} to="/about">
                    Learn More
                </Button>
            </Box>
           
        </div>
    )
}
