import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
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

export default function Chart({title, positions, isMobile}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Box fontSize="h2.fontSize" fontWeight="fontWeightMedium" mt={4}>{title}</Box>

            {Object.keys(positions).map((industry, i) => (

                <React.Fragment key={i}>
                    <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" align="left" mt={6} mb={2}>{industry}</Box>

                    {positions[industry].map((position, i) => (
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" key={i}>
                            <Grid item xs={4}>
                                <Box align="left" fontSize={isMobile ? "body2.fontSize" : "body1.fontSize"}>{position.name}</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box align="left" fontSize={isMobile ? "body2.fontSize" : "body1.fontSize"}>{position.position}</Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box align="left" fontSize={isMobile ? "body2.fontSize" : "body1.fontSize"}>{position.company}</Box>
                            </Grid>

                            <div className={classes.dividerDiv}></div>

                        </Grid>
                    ))}

                </React.Fragment>
            ))}
        </div>
    )
}



