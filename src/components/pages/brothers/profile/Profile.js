import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {profiles} from '../lists/profiles'
import ProfileSingle from './ProfileSingle'
import ProfileArray from './ProfileArray'

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    link: {
        color: "#003273"
    },
    content : {
        width: 500,
        height: 500
    },
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    }
}));

export default function Profile({setPage, match}) {
    useEffect(() => {
        setPage("Profile")
    });

    const pathToName = (path, sep) => {
        //const name = path.toLowerCase().replace(/-+/g, ' ')
        let names = path.split("-")

        for (var i=0; i < names.length; i++) {
            const first = names[i][0].toUpperCase();
            names[i] = first + names[i].slice(1)
        }

        return names.join(sep)
    }

    const classes = useStyles()
    
    const pathName = match.params.name
    const _name = pathToName(pathName, '_');
    const name = pathToName(pathName, ' ')
    const profile = profiles[_name]

    return (
        <Box mt={6} mb={6}>
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                
                <Grid item xs={6} sm container direction="column" justify="center" alignItems="center" spacing={2} >
                    <Grid item>
                        <div className={classes.content}>
                            <img className={classes.img} alt={name} src={profile["img"]}/>
                        </div>
                    </Grid>

                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                {name}
                            </Box>
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
                    </Grid>
                </Grid>
                
                <Grid item xs={6} sm container direction="row" spacing={2}>
                    
                    <Grid item xs={6} container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                        
                                <ProfileSingle profile={profile} field="major" title="Major"></ProfileSingle>
                                <ProfileSingle profile={profile} field="minor" title="Minor"></ProfileSingle>
                                <ProfileSingle profile={profile} field="emphasis" title="Emphasis"></ProfileSingle>
                                <ProfileSingle profile={profile} field="practice" title="Practice"></ProfileSingle>
                                <ProfileSingle profile={profile} field="class" title="Class"></ProfileSingle>
                                <ProfileSingle profile={profile} field="gradYear" title="Graduation Year"></ProfileSingle>
                               
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={6} container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography component="div">

                                <ProfileArray profile={profile} field="experience" title="Work Experience"></ProfileArray>
                                <ProfileArray profile={profile} field="campusInvolvements" title="Campus Involvements"></ProfileArray>
                                <ProfileArray profile={profile} field="interests" title="Interests"></ProfileArray>

                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

            {profile["whyLPN"] !== "" && 
                <Box mt={2} ml={14} mr={14} className={classes.root}>
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
    )
}
