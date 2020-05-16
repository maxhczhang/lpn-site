import React from 'react'

import CoreValues from './CoreValues'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    first: {
        maxWidth: "80%"
    },
    gridItem: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.first} mx="auto" p={6}>
                <Box m={2}>
                    <Typography variant="h3">Who Are We?</Typography>
                </Box>

                <Box m={2}>
                    <Typography variant="body1">
                        <Box>
                            Lambda Phi Nu is a co-ed  business leadership fraternity founded at UCI
                            committed to inspiring the best in everyone. Our brothers aspire to become visionaries, influencers, and 
                            mobilizers. This means we dream big, rally support, and get it done.
                        </Box>
                  
                    <Box mt={1}>
                        During their time on campus, each of our brothers left a legacy because they saw a need to fill, 
                        a problem to solve, or someone to care about. We are inspired to carry on the torch they left us.
                    </Box>
                    </Typography>
                </Box>

                <Divider></Divider>

                <Box m={6}>
                    <Typography variant="h5">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Box className={classes.gridItem} fontWeight="fontWeightBold">9 Business Orgs Founded</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className={classes.gridItem} fontWeight="fontWeightBold">?? Curent Leadership Positions</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className={classes.gridItem} fontWeight="fontWeightBold">29 President Positions Held</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className={classes.paper} fontWeight="fontWeightBold">100% Internship Placement Rate</Box>
                            </Grid> 
                            <Grid item xs={4}>
                                <Box className={classes.paper} fontWeight="fontWeightBold">?? Internships Per Active On Average</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className={classes.paper} fontWeight="fontWeightBold">??% Full-time Offer Rate Prior To Graduation</Box>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
                <Divider></Divider>
            </Box>

           

            <Box mt={6}>
                <Typography variant="h3">Our Core Values</Typography>
            </Box>
            <Box mt={3} mb={6}>
                <CoreValues></CoreValues>
            </Box>

           
        </div>
    )
}
