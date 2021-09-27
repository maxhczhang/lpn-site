import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import Tooltip from '@material-ui/core/Tooltip';
import ScheduleIcon from '@material-ui/icons/Schedule';

import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MailIcon from '@material-ui/icons/Mail';
import VideocamIcon from '@material-ui/icons/Videocam';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

import ICalendarLink from "react-icalendar-link";


const useStyles = makeStyles((theme) => ({
    paragraph: {
        color: "white",
        maxWidth: "80%"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(255,255,255, 0.1)"
        }
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    iconButton: {
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(255,255,255, 0.1)"
        }
    },
    titleIcon: {
        marginTop: 14
    },
}));

export default function RushEvent({event, cardStyle}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={cardStyle} raised={true}>
            
            <CardHeader
                title={
                    <React.Fragment>
                        {event.title === "Info Night" && <InfoIcon fontSize="large" className={classes.titleIcon}></InfoIcon>}
                        {event.title === "Meet the Bros" && <PeopleIcon fontSize="large" className={classes.titleIcon}></PeopleIcon>}
                        {event.title === "Professional Night" && <BusinessCenterIcon fontSize="large" className={classes.titleIcon}></BusinessCenterIcon>}
                        {event.title === "Invite-Only Social" && <MailIcon fontSize="large" className={classes.titleIcon}></MailIcon>}
                        {event.title === "Coffee Chats" && <LocalCafeIcon fontSize="large" className={classes.titleIcon}></LocalCafeIcon>}
                        <Typography component="div">
                            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" mt={1} mb={1}>{event.title}</Box>
                        </Typography>
                    </React.Fragment>
    
                }
                subheader={
                    <Typography component="div">
                        <Box fontSize="h5.fontSize" fontWeight="fontWeightBold">{event.date}</Box>  
                    </Typography>
                }
                disableTypography={true}
                className={classes.paragraph}
            />
           <CardContent className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" fontWeight="fontWeightMedium" letterSpacing={2}>{event.subtitle}</Box>
                </Typography>
            </CardContent>
            <CardContent className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" fontWeight="fontWeightMedium" letterSpacing={2}>{event.time}</Box>
                </Typography>
            </CardContent>
            <CardContent className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" fontWeight="fontWeightMedium" letterSpacing={2}>{event.location}</Box>
                </Typography>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" fontWeight="fontWeightLight" letterSpacing={2}>{event.dressCode}</Box>
                </Typography>
            </CardContent>
            {/* <CardContent className={classes.paragraph}>
                <Typography component="div">
                    <Box fontSize="h6.fontSize" fontWeight="fontWeightMedium" letterSpacing={2}>{event.dressCode}</Box>
                </Typography>
            </CardContent> */}

            <CardActions disableSpacing>
                    {event.ics && 
                        <Tooltip title="Add to calendar">
                            <ICalendarLink event={event.ics}>
                                <IconButton aria-label="add to calendar" className={classes.iconButton}>
                                    <EventIcon />
                                </IconButton>
                            </ICalendarLink>
                        </Tooltip>
                    }
            
                    {event.checkinLink && 
                        <Tooltip title={event.eventTooltip}>
                            <a href={event.checkinLink} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                <IconButton aria-label="Zoom" className={classes.iconButton}>
                                    {event.eventIcon === 'schedule' 
                                        ? <ScheduleIcon />
                                        : <VideocamIcon />
                                    }
                                </IconButton>
                            </a>
                        </Tooltip>
                    }

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon className={classes.icon}/>
                    </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.paragraph}>
                    <Typography variant="body1" paragraph>{event.description}</Typography>
                    {/* <Typography variant="body1" paragraph>{event.dressCode}</Typography> */}
                </CardContent>
            </Collapse>
            
        </Card>
    );
}