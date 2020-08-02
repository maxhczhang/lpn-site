import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Typist from 'react-typist'
import Divider from '@material-ui/core/Divider';

import Companies from '../../pages/home/Companies'


const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        color: "white",
    },
    content: {
        maxWidth: "80%",
        marginTop: "30vh"
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
        marginTop: "20vh",
    },
    noParallaxBckground: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        color: "black",
        marginTop: "6vh",
    }
}));

export default function HeaderContent({pageNum}) {
    const msgs = ["A Business Leadership Fraternity.", "ΛΦΝ", "UC Irvine"]
    const classes = useStyles();

    switch(pageNum) {

        case 0:
            return (
                <Box className={classes.contentWrapper}>
                    <Typography component="div" style={{maxWidth: "80%", marginTop: "25vh"}}>
                        <Typist cursor={{show: false}}>

                        <Box fontWeight="fontWeightBold" fontSize='4rem'>{msgs[0]}</Box>
                        <Typist.Backspace count={msgs[0].length} delay={300}></Typist.Backspace>

                        <Box fontWeight="fontWeightBold" fontSize='6rem'>{msgs[1]}</Box>
                        <Box fontWeight="fontWeightMedium" fontSize='5rem'>{msgs[2]}</Box>

                        </Typist>
                    </Typography>
        
                    {/* <Box style={{marginTop: "25vh"}}>
                        <Companies></Companies>
                    </Box> */}
                </Box>
                
            )
            
        case 1:
            return (
                <Box className={classes.contentWrapper}>
                    <Box fontWeight="fontWeightBold" fontSize='5rem' className={classes.content}>
                        About Us
                    </Box>
                </Box>
            )

        case 2:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Active Brothers
                    </Box> 
                    <Divider style={{height: 1, width: "70%"}}></Divider>
                </Box>
               
            )

        case 3:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Campus Involvement
                    </Box>
                </Box>
            )

        case 4:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Careers
                    </Box>
                </Box>
            )

        case 5:
            return (
                <React.Fragment></React.Fragment>
            )

        case 6:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Common Questions
                    </Box>
                    <Divider style={{ height: 1, width: "70%" }}></Divider>
                </Box>
            )

        case 7:
            return (
                <Box className={classes.contentWrapper}>
                    <Box fontWeight="fontWeightBold" fontSize='5rem' className={classes.content}>
                        Our Memories
                    </Box>
                </Box>
            )

        case 8:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Questions?
                    </Box>
                    <Divider style={{ height: 1, width: "70%" }}></Divider>
                </Box>
            )

        case 9:
            return (
                <React.Fragment></React.Fragment>
            )
    
        default:
            return (
                <React.Fragment></React.Fragment>
            )
    }
}
