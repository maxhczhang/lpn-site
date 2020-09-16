import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        align: "center"
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
    image: {
        height: 350,
        width: 350,
        objectFit: "cover"
    }
}));

export default function HomeCoreValues({isMobile}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={10} direction="row" justify="space-evenly">
                
                <Grid item xs={isMobile ? 12 : 4}>
                    <Typography component="div">
                        <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize" mt={5} mb={2}>
                            Excellence
                        </Box>
                        <Box fontSize="h6.fontSize">Whether its scaling a rock wall or securing positions at top-tier firms, our Brothers excel at everything they do.</Box>
                    </Typography>
                </Grid>

                <Grid item xs={isMobile ? 12 : 4}>
                    <Typography component="div">
                        <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize" mt={5} mb={2}>
                            Relationships
                        </Box>
                        <Box fontSize="h6.fontSize">Our Brothers form life-long relationships with the friends they cross with as well as all our Active and Alumni Brothers.</Box>
                    </Typography>
                </Grid>

                <Grid item xs={isMobile ? 12 : 4}>
                    <Typography component="div">
                        <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize" mt={5} mb={2}>
                            Altruism
                        </Box>
                        <Box fontSize="h6.fontSize">Our Brothers give back to UCI by running different campus organizations and raising money for causes we support.</Box>
                    </Typography>
                    
                </Grid>

            </Grid>

            <Box mt={8}>
                <Button size="large" variant="contained" className={classes.button} component={Link} to="/about">
                    Learn More
                </Button>
            </Box>
           
        </div>
    )
}
