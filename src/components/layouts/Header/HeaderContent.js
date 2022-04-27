import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Typist from 'react-typist'
import useWindowDimensions from '../../utils/WindowListener'


const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        display: "flex",
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
    },
    downArrow: {
        fontSize: 50
    },
    bottom: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    bottomWrapper: {
        color: "white",
        display: "flex",
        alignItems: 'center',
        flexDirection: "column",
    },
}));

export default function HeaderContent({pageNum}) {
    const classes = useStyles();

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    switch(pageNum) {

        case 0:
            const titles = ["A Business Leadership Fraternity.", "ΛΦΝ"]
            const captions = ["UC Irvine", "Curiosity", "Excellence", "Relationships", "Integrity", "Altruism"]
            const finalCaption = "UC Irvine"

            return (
               <React.Fragment>
                <Box className={classes.contentWrapper}>
                    <Typography component="div" style={{maxWidth: "80%", marginTop: "25vh"}}>
                        <Typist cursor={{show: false}}>

                            <Box fontWeight="fontWeightBold" fontSize={isMobile ? '3rem' : '3.5rem'}>{titles[0]}</Box>
                            <Typist.Backspace count={titles[0].length} delay={300}></Typist.Backspace>

                            <Box fontWeight="fontWeightBold" fontSize='6rem' letterSpacing={6}>{titles[1]}</Box>

                            {captions.map((caption) => (
                                <div key="{caption}">
                                    <Typography variant="h4">{caption}</Typography>
                                    <Typist.Backspace count={caption.length} delay={1000}></Typist.Backspace>
                                </div>
                            ))}

                            <Typography variant="h4">{finalCaption}</Typography>

                        </Typist>
                    </Typography>
                </Box>
                <div className={classes.bottomWrapper}>
                    <div className={classes.bottom}>
                        <KeyboardArrowDownIcon className={classes.downArrow}></KeyboardArrowDownIcon>
                    </div>
                </div>
                </React.Fragment>
            )   
            
        case 1:
            return (
                <React.Fragment>
                    <Box className={classes.contentWrapper}>
                        <Box fontWeight="fontWeightBold" fontSize={isMobile ? '4rem' : '5rem'} className={classes.content}>About Us</Box>
                        <Typography variant="h5">Learn about Lambda Phi Nu and our history.</Typography>
                    </Box>
                    <div className={classes.bottomWrapper}>
                        <div className={classes.bottom}>
                            <KeyboardArrowDownIcon className={classes.downArrow}></KeyboardArrowDownIcon>
                        </div>
                    </div>
                </React.Fragment>
            )

        case 2:
            return ( <React.Fragment></React.Fragment> )

        case 3:
            return (
                <Box className={classes.smBckgrndContent}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                        Giving Back
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
            return ( <React.Fragment></React.Fragment> )

        case 6:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mt={6} mb={2}>
                        Common Questions
                    </Box>
                    <Divider style={{ height: 1, width: "70%" }}></Divider>
                </Box>
            )

        case 7:
            return (
                <React.Fragment>
                    <Box className={classes.contentWrapper}>
                        <Box fontWeight="fontWeightBold" fontSize={isMobile ? '4rem' : '5rem'} className={classes.content}>
                            Our Memories
                        </Box>
                    </Box>
                    <div className={classes.bottomWrapper}>
                        <div className={classes.bottom}>
                            <KeyboardArrowDownIcon className={classes.downArrow}></KeyboardArrowDownIcon>
                        </div>
                    </div>
                </React.Fragment>
            )

        case 8:
            return (
                <Box className={classes.noParallaxBckground}>
                    <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" mt={6} mb={2}>
                        Questions?
                    </Box>
                    <Divider style={{ height: 1, width: "70%" }}></Divider>
                </Box>
            )

        case 9:
            return ( 
                <React.Fragment></React.Fragment> 
            )

        case 10:
            return (
                <React.Fragment></React.Fragment> 
            )

        default:
            return ( 
                <Typography variant="h1">Oops, something went wrong! Please navigate back to another page.</Typography>
            )

    }
}
