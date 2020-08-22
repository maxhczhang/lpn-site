import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { profiles } from '../lists/profiles'
import ProfileSingle from './ProfileSingle'
import ProfileArray from './ProfileArray'
import MobileProfile from './MobileProfile'
import useWindowDimensions from '../../../WindowListener'


const useStyles = makeStyles((theme) => ({
    img: {
        width: 400,
        height: 600,
    },
    mobileimg: {
        width: 300,
        height: 450,
    },
    link: {
        color: "#003273"
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
}));

const pathToName = (path, sep) => {
    //const name = path.toLowerCase().replace(/-+/g, ' ')
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
            <div className={classes.root}>
                <Box mt={6} mb={6} className={classes.paragraph}>
                    <Grid container direction="row" justify="center">

                        <Grid item xs={6} container direction="row" justify="center" alignItems="center">
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Typography component="div">
                                        <Box fontWeight="fontWeightBold" fontSize="h2.fontSize">
                                            {name}
                                        </Box>
                                    </Typography>
                                </Grid>
                                {profile["linkedIn"] !== "" &&
                                    <Grid item>
                                        <a href={profile["linkedIn"]} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                            <IconButton size="medium" aria-label="LinkedIn" color="inherit">
                                                <LinkedInIcon></LinkedInIcon>
                                            </IconButton>
                                        </a>
                                    </Grid>
                                }
                                <Grid item style={{ pointerEvents: "none" }}>
                                    <div className={classes.img}>
                                        <img className={classes.img} alt={name} src={profile["img"]} />
                                    </div>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item xs={6}>
                            <Grid container direction="row" justify="center" >

                                <Grid item xs={6} container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography component="div">
                                            <ProfileSingle profile={profile} field="major" title="Major" isMobile={isMobile}></ProfileSingle>
                                            <ProfileSingle profile={profile} field="minor" title="Minor" isMobile={isMobile}></ProfileSingle>
                                            <ProfileSingle profile={profile} field="emphasis" title="Emphasis" isMobile={isMobile}></ProfileSingle>
                                            <ProfileSingle profile={profile} field="practice" title="Practice" isMobile={isMobile}></ProfileSingle>
                                            <ProfileSingle profile={profile} field="class" title="Class" isMobile={isMobile}></ProfileSingle>
                                            <ProfileSingle profile={profile} field="gradYear" title="Graduation Year" isMobile={isMobile}></ProfileSingle>
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6} container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography component="div">
                                            <ProfileArray profile={profile} field="experience" title="Work Experience" isMobile={isMobile}></ProfileArray>
                                            <ProfileArray profile={profile} field="campusInvolvements" title="Campus Involvements" isMobile={isMobile}></ProfileArray>
                                            <ProfileArray profile={profile} field="interests" title="Interests" isMobile={isMobile}></ProfileArray>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {profile["whyLPN"] !== "" &&
                        <Box mt={6} >
                            <Typography component="div">
                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Why ΛΦΝ?
                            </Box>
                                <Box fontStyle="italic" fontSize="h6.fontSize">
                                    "{profile["whyLPN"]}"
                            </Box>
                            </Typography>
                        </Box>
                    }
                </Box>

            </div>
        )
    }

}
