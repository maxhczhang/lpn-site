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
}));

export default function HomeCoreValues({isMobile}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={3} direction="row" justify="space-evenly">
                <Grid item xs={isMobile ? 12 : 4}>

                    <Box mt={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Excellence
                            </Box>
                        </Typography>
                        <Typography variant="body1">Whether its scaling a rock wall or securing positions at top-tier firms, our Brothers excel at everything they do.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={isMobile ? 12 : 4}>

                    <Box mt={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Relationships
                            </Box>
                        </Typography>
                        <Typography variant="body1">Our Brothers form life-long relationships, from the first night of Pledge to their Commencement.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={isMobile ? 12 : 4}>

                    <Box mt={2}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightMedium" fontSize="h4.fontSize">
                                Altruism
                            </Box>
                        </Typography>
                        <Typography variant="body1">Our Brothers give back to UCI by running different campus organizations and raising money for causes we support.</Typography>
                    </Box>
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
