import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { profiles } from '../lists/profiles'
import ProfileSingle from './ProfileSingle'
import ProfileArray from './ProfileArray'
import MobileProfile from './MobileProfile'
import useWindowDimensions from '../../../WindowListener'


const useStyles = makeStyles((theme) => ({
    img: {
        width: 376,
        height: 569,
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

                <Grid container direction="row" justify="center" alignItems="center">

                    <Grid item xs={6} container>
                        
                        <Grid item xs={12}>
                            <Typography component="div">
                                <Box fontWeight="fontWeightBold" fontSize="h1.fontSize">
                                    {name}
                                </Box>                 
                                <Box fontSize="h4.fontSize" mb={4}>
                                    {profile['class']} Class
                                </Box>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} style={{ pointerEvents: "none" }}>
                            <img className={classes.img} alt={name} src={profile["img"]} />
                        </Grid>

                    </Grid>

                    <Grid item xs={6} container spacing={10}>
                
                        <Grid item xs={6} container>
                            <Typography component="div">
                                <ProfileSingle profile={profile} field="major" title="Major" isMobile={isMobile}></ProfileSingle>
                                <ProfileSingle profile={profile} field="minor" title="Minor" isMobile={isMobile}></ProfileSingle>
                                <ProfileSingle profile={profile} field="emphasis" title="Emphasis" isMobile={isMobile}></ProfileSingle>
                                <ProfileSingle profile={profile} field="practice" title="Practice" isMobile={isMobile}></ProfileSingle>
                                <ProfileSingle profile={profile} field="gradYear" title="Graduation Year" isMobile={isMobile}></ProfileSingle>
                                <ProfileArray profile={profile} field="interests" title="Interests" isMobile={isMobile}></ProfileArray>
                            </Typography>
                        </Grid>

                        <Grid item xs={6} container>
                            <Typography component="div">
                                <ProfileArray profile={profile} field="experience" title="Work Experience" isMobile={isMobile}></ProfileArray>
                                <ProfileArray profile={profile} field="campusInvolvements" title="Campus Involvements" isMobile={isMobile}></ProfileArray>
                                <Box mt={8}>
                                    <a href={profile["linkedIn"]} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                        <Button size="large" variant="contained" className={classes.button}>
                                            Connect on LinkedIn
                                        </Button>
                                    </a>
                                </Box>
                            </Typography>
                        </Grid>
                        
                    </Grid>

                </Grid>

                {profile["whyLPN"] !== "" &&
                    <Box mt={8}>
                        <Typography component="div" className={classes.root}>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize" mb={2}>
                                Why ΛΦΝ?
                            </Box>
                            <Box fontStyle="italic" fontSize="h6.fontSize" className={classes.paragraph}>
                                "{profile["whyLPN"]}"
                            </Box>
                        </Typography>
                    </Box>
                }

            </Box>
        )
    }

}
