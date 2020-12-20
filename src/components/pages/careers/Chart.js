import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

// import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
    },
    mobileRoot: {
        width: "90%"
    },
    divider: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
    },
    dividerDiv: {
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'rgb(88, 12, 31, 0.2)',
        height: 1
    },
}));

export default function Chart({title, jsonHeading, positions, isMobile}) {
    const classes = useStyles();

    return (
        <Typography component="div" className={isMobile ? classes.mobileRoot : classes.root}>

            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" align="left" mt={6} mb={2}>{title}</Box>
        
            {positions[jsonHeading].map((position, i) => (
                <Grid container direction="row" justify="center" alignItems="center" key={i}>
                    <Grid item xs={4}>
                        <Box align="left" fontSize={isMobile ? "body2.fontSize" : "body1.fontSize"}>{position.name}</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box align="left" fontSize={isMobile ? "body2.fontSize" : "body1.fontSize"}>{position.position}</Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box align="left" fontSize={isMobile ? "body2.fontSize" : "body1.fontSize"}>{position.company}</Box>
                    </Grid>
                    {/* <Divider className={classes.divider}></Divider> */}
                    <div className={classes.dividerDiv}></div>
                </Grid>
            ))}

        </Typography>
    )
}
