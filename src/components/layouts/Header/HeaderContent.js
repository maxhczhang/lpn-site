import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Typist from 'react-typist'

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        color: "white",
        marginTop: "15%",
    },
    smBckgrndContent: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        color: "white",
        marginTop: "6%",
    }
}));

export default function HeaderContent({pageNum}) {
    const msgs = ["A Business Leadership Fraternity.", "ΛΦΝ", "UC Irvine"]
    const classes = useStyles();

    switch(pageNum) {

        case 0:
            return (
                <Box className={classes.content}>
                    <Typography>
                        <Typist cursor={{show: false}}>

                        <Box fontWeight="fontWeightMedium" fontSize="h2.fontSize">{msgs[0]}</Box>
                        <Typist.Backspace count={msgs[0].length} delay={300}></Typist.Backspace>

                        <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">{msgs[1]}</Box>
                        <Box fontSize="h2.fontSize">{msgs[2]}</Box>

                        </Typist>
                    </Typography>
                </Box>
                
            )
            
        case 1:
            return (
                <Box className={classes.content}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        About Us
                    </Box>
                </Box>
            )

        case 2:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Active Brothers
                    </Box>
                </Box>
            )

        case 3:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Campus Involvement
                    </Box>
                </Box>
            )

        case 4:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Careers
                    </Box>
                </Box>
            )
        case 5:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Fall Rush 2020
                    </Box>
                </Box>
            )
        case 6:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Common Questions
                    </Box>
                </Box>
            )
        case 7:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Our Memories
                    </Box>
                </Box>
            )
        case 8:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightMedium" fontSize="h1.fontSize">
                        Contact Us
                    </Box>
                </Box>
            )

        case 10:
            return (
                <React.Fragment></React.Fragment>
            )
    
        default:
            return (
                <Typography variant="h1">Hi :)</Typography>
            )
    }
}
