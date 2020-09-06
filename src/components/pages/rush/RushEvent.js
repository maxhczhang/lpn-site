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

import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MailIcon from '@material-ui/icons/Mail';
import VideocamIcon from '@material-ui/icons/Videocam';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ICalendarLink from "react-icalendar-link";


const useStyles = makeStyles((theme) => ({
    gray: {
        backgroundColor: "#580C1F",
        color: "white",
        width: 300,
    },
    paragraph: {
        display: "flex",
        alignItems: 'center',
        flexDirection: "column",
        color: "white"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    icon: {
        color: "white"
    }
}));

export default function RushEvent({event}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.gray} raised={true}>
            
            <CardHeader
                title={
                    <React.Fragment>
                        {event.title === "Info Night" && <InfoIcon fontSize="large"></InfoIcon>}
                        {event.title === "Meet the Bros" && <PeopleIcon fontSize="large"></PeopleIcon>}
                        {event.title === "Professional Night" && <BusinessCenterIcon fontSize="large"></BusinessCenterIcon>}
                        {event.title === "Invite-Only Social" && <MailIcon fontSize="large"></MailIcon>}
                        <Typography component="div">
                            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">{event.title}</Box>
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
                <Typography variant="body1" component="p">
                   {event.description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                    <Tooltip title="Add to calendar">
                        <ICalendarLink event={event.ics}>
                            <IconButton aria-label="add to calendar" className={classes.icon}>
                                <EventIcon className={classes.icon}/>
                            </IconButton>
                        </ICalendarLink>
                    </Tooltip>

                    <Tooltip title="Join on Zoom">
                        <IconButton aria-label="Zoom" className={classes.icon}>
                            <VideocamIcon className={classes.icon}/>
                        </IconButton>
                    </Tooltip>

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        style={{color: "white"}}
                    >
                        <ExpandMoreIcon className={classes.icon}/>
                    </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.paragraph}>
                    <Typography variant="body1" paragraph>7 - 9:30 pm</Typography>
                    <Typography variant="body1" paragraph>{event.dressCode}</Typography>
                </CardContent>
            </Collapse>
            
        </Card>
    );
}