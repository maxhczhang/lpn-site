import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Link } from "react-router-dom";

import useWindowDimensions from '../../utils/WindowListener';
import RushEvent from './RushEvent'
import { events } from './FallEvents'
import flyer from '../../../assets/recruitment/Winter2022.png'


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "rgb(143,75,78)",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(173,95,93)"
        },
        width: 150
    },
    divider: {
        height: 1,
        width: "70%"
    },
    paragraph: {
        maxWidth: "60%",
    },
    cover: {
        marginTop: 60,
        marginBottom: 90,
        width: 800,
        height: 500,
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    coverMobile: {
        marginTop: 60,
        marginBottom: 90,
        maxWidth: "80%",
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
    },
    content: {
        maxWidth: "80%"
    },
    link: {
        textDecoration: "none",
        color: "white"
    },
    highlightLink: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        '&:hover': {
            color: "rgb(94,78,100)"
        }
    },
    highlightText: {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
        '&:hover': {
            color: "#A92C26"
        }
    },
    image: {
        width: 333,
        height: 500,
    },
    card: {
        background: "linear-gradient(350deg, rgb(94,78,100) 0%, rgb(173,95,93) 50%, rgb(163,126,116) 100%)",
        color: "white",
        width: 350,
    },
    mobileCard: {
        background: "linear-gradient(6deg, rgb(94,78,100) 0%, rgb(173,95,93) 50%, rgb(163,126,116) 100%)",
        color: "white",
        width: "95%",
    },
}));


export default function Winter2021({ setPage }) {
    useEffect(() => {
        setPage("WinterRush2021")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={12} mb={18} className={classes.root}>
            <Box mb={2}>
                <Typography component="div" className={classes.root}>
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" className={isMobile ? classes.content : ""}>
                        <a href="https://www.facebook.com/events/637598140621270" target="_blank" rel="noopener noreferrer" className={classes.highlightLink}>Fall 2022 rush info coming soon</a>
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
                        Tau Class Recruitment
                    </Box>
                </Typography>
            </Box>
            
            <a href="https://www.facebook.com/events/637598140621270" target="_blank" rel="noopener noreferrer">
                <img src={flyer} className={isMobile ? classes.coverMobile : classes.cover} alt="Winter Rush 2022"></img>
            </a>

            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                Stay tuned for Fall 2022 rush info! We are excited to meet you!
                </Box>
                <Box mt={6} mb={6} fontSize="h6.fontSize">
                We are devoted to supporting one another to achieve excellence in order to create both inspiring and lasting impacts in the greater community. As an organization that is a gateway to a lifelong brotherhood, a partner to the community, and a foremost exporter of leaders to not only firms but the society we all live in today, we strive to illuminate the paths of wherever our Active Brothers venture.
                </Box>
            </Typography>

            <Divider className={classes.divider}></Divider>

            <Box mt={14} mb={14} className={classes.content}>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={10}>
                    {events.map((event, i) => (
                        <Grid item xs={isMobile ? 12 : 6} align="center" key={i}>
                            <RushEvent event={event} cardStyle={isMobile ? classes.mobileCard : classes.card}></RushEvent>
                        </Grid>
                    ))}
                </Grid>

                {/* <Box mt={14}></Box>
                <Button size="large" variant="contained" disabled className={classes.button} href="https://docs.google.com/forms/d/e/1FAIpQLSdioJmOesXHmABTxHibmf4u4ThT30uPT1jbq857GiQvr_JtIg/viewform?usp=sf_link" target="_blank">Apply Now</Button>
                
                <Typography component="div">
                    <Box fontweight="fontWeightMedium" fontSize="h5.fontSize" mt={8}>
                        Our rush events have ended and our application has closed for this recruitment cycle!
                    </Box>
                </Typography> */}
            </Box>

            <Divider className={classes.divider}></Divider>

            <Box mt={12} className={classes.content}>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6}>
                    <Grid item>
                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/about">
                            Why LPN?
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button size="large" variant="contained" className={classes.button} component={Link} to="/faqs">
                            FAQs
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </Box>


        // <Box mt={12} mb={18} className={classes.root}>
        // <Box mb={2}>
        //     <Typography component="div" className={classes.root}>
        //         <Box fontWeight="fontWeightBold" fontSize="h1.fontSize" className={isMobile ? classes.content : ""}>
        //             <a href="https://www.facebook.com/events/637598140621270" target="_blank" rel="noopener noreferrer" className={classes.highlightLink}>Emerge</a>
        //         </Box>
        //         <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
        //             Sigma Class Recruitment
        //         </Box>
        //     </Typography>
        // </Box>

        // <a href="https://www.facebook.com/events/637598140621270" target="_blank" rel="noopener noreferrer">
        //     <img src={flyer} className={isMobile ? classes.coverMobile : classes.cover} alt="Winter Rush 2022"></img>
        // </a>

        // <Divider className={classes.divider}></Divider>

        // <Typography component="div" className={classes.paragraph} align="left">
        //     <Box mt={10} fontSize="h6.fontSize">
        //     Join us for our virtual winter recruitment with Lambda Phi Nu, a business leadership fraternity founded here at UC Irvine.
        //     </Box>
        //     <Box mt={6} mb={6} fontSize="h6.fontSize">
        //     We are devoted to supporting one another to achieve excellence in order to create both inspiring and lasting impacts in the greater community. As an organization that is a gateway to a lifelong brotherhood, a partner to the community, and a foremost exporter of leaders to not only firms but the society we all live in today, we strive to illuminate the paths of wherever our Active Brothers venture.
        //     </Box>
        // </Typography>

        // <Divider className={classes.divider}></Divider>

        // <Box mt={14} mb={14} className={classes.content}>
        //     <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={10}>
        //         {events.map((event, i) => (
        //             <Grid item xs={isMobile ? 12 : 6} align="center" key={i}>
        //                 <RushEvent event={event} cardStyle={isMobile ? classes.mobileCard : classes.card}></RushEvent>
        //             </Grid>
        //         ))}
        //     </Grid>

        //     {/* <Box mt={14}></Box>
        //     <Button size="large" variant="contained" disabled className={classes.button} href="https://docs.google.com/forms/d/e/1FAIpQLSdioJmOesXHmABTxHibmf4u4ThT30uPT1jbq857GiQvr_JtIg/viewform?usp=sf_link" target="_blank">Apply Now</Button>
            
        //     <Typography component="div">
        //         <Box fontweight="fontWeightMedium" fontSize="h5.fontSize" mt={8}>
        //             Our rush events have ended and our application has closed for this recruitment cycle!
        //         </Box>
        //     </Typography> */}
        // </Box>

        // <Divider className={classes.divider}></Divider>

        // <Box mt={12} className={classes.content}>
        //     <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6}>
        //         <Grid item>
        //             <Button size="large" variant="contained" className={classes.button} component={Link} to="/about">
        //                 Why LPN?
        //             </Button>
        //         </Grid>
        //         <Grid item>
        //             <Button size="large" variant="contained" className={classes.button} component={Link} to="/faqs">
        //                 FAQs
        //             </Button>
        //         </Grid>
        //     </Grid>
        // </Box>

        // </Box>
    )
}