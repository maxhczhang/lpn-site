import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { profiles } from '../lists/profiles'
import ProfileSingle from './ProfileSingle'
import ProfileObject from './ProfileObject'
import ProfileArray from './ProfileArray'
import MobileProfile from './MobileProfile'
import useWindowDimensions from '../../../utils/WindowListener'


const useStyles = makeStyles((theme) => ({
    img: {
        width: "50%",
        //width: 300,
        //height: 450,
    },
    mobileimg: {
        width: 300,
        height: 450,
    },
    link: {
        textDecoration: "None",
    },
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    paragraph: {
        maxWidth: "80%"
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        backgroundColor: "#580C1F",
        color: "white",
        '&:hover': {
            backgroundColor: "rgb(150,74,93)"
        }
    },
    whyLPNBox: {
        width: "100%"
    },
    divider: {
        height: 1,
        width: "80%"
    }
}));

const pathToName = (path, sep) => {
    let names = path.split("-")

    for (var i = 0; i < names.length; i++) {
        const first = names[i][0].toUpperCase();
        names[i] = first + names[i].slice(1)
    }
    return names.join(sep)
}


export default function Profile({setPage, match}) {
    useEffect(() => {
        setPage("Profile")
    });

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    const classes = useStyles()
    
    const pathName = match.params.name
    const _name = pathToName(pathName, '_');
    const name = pathToName(pathName, ' ')
    const profile = profiles[_name]

    if (isMobile) {
        return <MobileProfile name={name} profile={profile} classes={classes}></MobileProfile>
    } 

    else {
        return (
            <Box mt={10} mb={10} className={classes.root}>

                <Grid container direction="row" justify="center">

                    <Grid item xs={6} container>
                        <Grid item xs={12} style={{ pointerEvents: "none" }}>
                            <img className={classes.img} alt={name} src={profile["img"]} />
                        </Grid>
                    </Grid>

                    <Grid item xs={6} container>
                        <Typography component="div" className={classes.paragraph}>

                            <Grid item xs={12}>
                                <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                                    {name}
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box fontSize="h4.fontSize" mb={8}>
                                    {profile['class']} Class
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <ProfileSingle title="Year" data={profile["year"]} isMobile={isMobile}></ProfileSingle>
                            </Grid>
                            <Grid item xs={12}>
                                <ProfileSingle title="Major" data={profile["major"]} isMobile={isMobile}></ProfileSingle>
                            </Grid>
                            <Grid item xs={12}>
                                <ProfileSingle title="Minor" data={profile["minor"]} isMobile={isMobile}></ProfileSingle>
                            </Grid>
                            <Grid item xs={12}>
                                <ProfileSingle title="Emphasis" data={profile["emphasis"]} isMobile={isMobile}></ProfileSingle>
                            </Grid>
                            <Grid item xs={12}>
                                <ProfileSingle title="Practice" data={profile["practice"]} isMobile={isMobile}></ProfileSingle>
                            </Grid>

                            <Grid item xs={12}>
                                <Box mt={8}></Box>
                                <a href={profile["linkedIn"]} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                    <Button size="large" variant="contained" className={classes.button}>
                                        Connect on LinkedIn
                                    </Button>
                                </a>
                            </Grid>

                        </Typography>
                    </Grid>

                </Grid>

                <Box mt={6}></Box>
                <Divider className={classes.divider}></Divider>
                <Box mt={6}></Box>

                <Typography component="div" className={classes.paragraph}>
                    <Grid container spacing={3} direction="row" justify="space-around">

                        <Grid item xs={3}>
                            <ProfileObject data={profile["experience"]} title="Experience" isMobile={isMobile}></ProfileObject>
                        </Grid>
                        <Grid item xs={3}>
                            <ProfileObject data={profile["campusInvolvements"]} title="Involvement" isMobile={isMobile}></ProfileObject>
                        </Grid>
                        <Grid item xs={3}>
                            <ProfileArray data={profile["interests"]} title="Interests" isMobile={isMobile}></ProfileArray>
                        </Grid>

                        {profile["whyLPN"] !== "" &&
                            <Grid item xs={12}>
                                <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" mb={2}>
                                    Why ΛΦΝ?
                                </Box>
                                <Box fontStyle="italic" fontSize="h6.fontSize" mb={6}>
                                    "{profile["whyLPN"]}"
                                </Box>
                            </Grid>
                        }

                    </Grid>
                </Typography>

            </Box>
        )
    }
}
