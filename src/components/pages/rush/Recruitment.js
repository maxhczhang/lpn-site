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
import { events } from './RushEvents'
import flyer from '../../../assets/recruitment/fall_2023.png'


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
        backgroundColor: "#7F888D",
        color: "white",
        '&:hover': {
            backgroundColor: "#939CA1"
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
       // background: "linear-gradient(135deg, rgba(0, 48, 97) 0%, rgba(34, 83, 125) 20%, rgba(78, 118, 152) 40%, rgba(121, 153, 180) 60%, rgba(165, 188, 207) 80%, rgba(209, 223, 235) 100%)"
        background: "rgb(173,182,176)",
        color: "white",
        width: 350,
    },
    mobileCard: {
        //background: "linear-gradient(135deg, rgba(0, 48, 97) 0%, rgba(34, 83, 125) 20%, rgba(78, 118, 152) 40%, rgba(121, 153, 180) 60%, rgba(165, 188, 207) 80%, rgba(209, 223, 235) 100%)",
        background: "rgb(173,182,176)",
        color: "white",
        width: "95%",
    },
}));


export default function Winter2023({ setPage }) {
    useEffect(() => {
        setPage("Recruitment")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box mt={12} mb={18} className={classes.root}>
            <Box mb={2}>
                <Typography component="div" className={classes.root}>
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" className={isMobile ? classes.content : ""}>
                        <a href="https://facebook.com/events/s/uci-lambda-phi-nu-fall-2023-re/1014564543000719/?mibextid=RQdjqZ" target="_blank" rel="noopener noreferrer" className={classes.highlightLink}>Fall Rush 2023</a>
                    </Box>
                    <Box fontWeight="fontWeighMedium" fontSize="h4.fontSize" mt={1} className={classes.content}>
                        Chi Class Recruitment
                    </Box>
                </Typography>
            </Box>
            
            <a href="https://facebook.com/events/s/uci-lambda-phi-nu-fall-2023-re/1014564543000719/?mibextid=RQdjqZ" target="_blank" rel="noopener noreferrer">
                <img src={flyer} className={isMobile ? classes.coverMobile : classes.cover} alt="Fall Rush 2023"></img>
            </a>

            <Divider className={classes.divider}></Divider>

            <Typography component="div" className={classes.paragraph} align="center">
                {/* <Box mt={10} mb={10} fontWeight="fontWeightMedium" fontSize="h5.fontSize"> 
                    Thank you to everyone who participated in our Winter 2023 Rush cycle! Our next Recruitment will take place during Fall 2023; check back here for more details.
                </Box> */}
                <Box mt={10} fontSize="h6.fontSize"> 
                    Lambda Phi Nu is a co-ed Business Leadership Fraternity founded at UC Irvine in 2010 for students seeking to develop their leadership potential and to foster their professional and personal growth. With over 220 Active and Alumni brothers, we are now actively recruiting for our Upsilon class!
                </Box>
                <Box mt={6} mb={6} fontSize="h6.fontSize">
                    Many of our brothers began their college experiences feeling unsure of their potential. Through our development curriculum and lifelong support, they went on to become leaders in campus organizations and excel in internships and full-time roles at companies like Microsoft, Goldman Sachs, Deloitte, and more! If you're looking to grow professionally, be apart of a lifelong community, and leave your legacy on the UCI community, join us this winter and experience what you could accomplish with Lambda Phi Nu.
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

                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6}>
                    <Grid item>
                        <a href="https://tinyurl.com/LPNFallrush2023" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
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