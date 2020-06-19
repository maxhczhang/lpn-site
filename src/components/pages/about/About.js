import React, { useEffect } from 'react'

import CoreValues from './CoreValues'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    first: {
        maxWidth: "70%"
    },
    gridItem: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    empty: {
        height: "10vh"
    }
}));

export default function About({setPage}) {
    const classes = useStyles();

    useEffect(() => {
        setPage("About")
    });

    return (
        <div className={classes.root}>

            <Box className={classes.first} mt={6}>
                <Typography>
                    <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
                        Who Are We?
                    </Box>
                </Typography>
            
                <Box mt={2} mb={6}>
                    <Typography variant="h6">
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
            </Box>

            <Divider style={{width: "70%"}}></Divider>

            <Box mt={6} mb={6} className={classes.first}>
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
            <Divider style={{ width: "70%" }}></Divider>
           
            <Box mt={6}>
                <Typography>
                    <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
                        Our Core Values
                    </Box>
                </Typography>
            </Box>
            <Box mt={2} mb={6}>
                <CoreValues></CoreValues>
            </Box>

            <div className={classes.empty}></div>

        </div>
    )
}
