import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { facts } from './FactList';


const useStyles = makeStyles((theme) => ({
    fact: {
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    title: {
        textTransform: "uppercase"
    }
}));


export default function LPNFacts({isMobile}) {
    const classes = useStyles();
    let cols;
    let answerSize;
    let titleSize;

    if (isMobile) {
        cols = 6;
        answerSize = "h4.fontSize";
        titleSize = "h6.fontSize";
    }
    else {
        cols = 4;
        answerSize = "h3.fontSize";
        titleSize = "h6.fontSize";
    }

    return (
        <Typography component="div">
            <Grid container spacing={6}>
                {facts.map((fact, i) => (
                    <Grid item xs={cols}>
                        <Box fontWeight="fontWeightBold" fontSize={answerSize} className={classes.fact}>{fact.answer}</Box>
                        <Box fontSize={titleSize} letterSpacing={2} className={classes.title}>{fact.title}</Box>
                    </Grid>
                ))}
            </Grid> 
        </Typography>
    )
}