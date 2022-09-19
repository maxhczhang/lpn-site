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
import { events } from './Fall22Events'
import flyer from '../../../assets/recruitment/Fall_2022.png'


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
        backgroundColor: "#3079c3",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(88,148,163)"
        },
        width: 150,
        textDecoration: 'none'
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
        background: "linear-gradient(310deg, rgba(242,245,246,255) 0%, #ADD8E6 60%, #3079c3 90%, rgba(38,97,156) 100%)",
        color: "white",
        width: 350,
    },
    mobileCard: {
        background: "linear-gradient(350deg, rgba(191,159,42,255) 0%, rgba(157,172,124,255) 50%, rgb(160,189,200) 80%, rgba(242,245,246,255) 100%)",
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
                        <a href="https://www.facebook.com/events/637598140621270" target="_blank" rel="noopener noreferrer" className={classes.highlightLink}>Fall Rush 2022</a>
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
                        Tau Class Recruitment
                    </Box>
                </Typography>
            </Box>
            
            <a href="https://www.facebook.com/events/1116329235984973" target="_blank" rel="noopener noreferrer">
                <img src={flyer} className={isMobile ? classes.coverMobile : classes.cover} alt="Fall Rush 2022"></img>
            </a>

            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="left">
                <Box mt={10} fontSize="h6.fontSize">
                We're excited to hold our Fall 2022 Rush cycle to recruit out 18th class of LPN brothers! Check out any of our Rush Events below starting on September 26, and catch us at the Anteater Involvement Fair, MUSA Orgs Fair, and more. We're excited to meet you!
                </Box>
                <Box mt={6} mb={6} fontSize="h6.fontSize">
                Many of our brothers came into UCI unsure of their potential. Through our pledging curriculum, they went on to become leaders in campus orgs and excel in internships at companies like Microsoft, Goldman Sachs, PwC, and more! If you're looking for professional growth and a lifelong community, we ask that you take the leap and wonder how far you can go with Lambda Phi Nu.
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
                    <Grid item>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSewR7DdZF47clyJ0SUu51PP2Mw2nk4LSy6uWMQi5jTq6Cr5HA/viewform" style={{textDecoration:'none'}}>
                            <Button size="large" variant="contained" className={classes.button}>
                                Apply
                            </Button>
                        </a>
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