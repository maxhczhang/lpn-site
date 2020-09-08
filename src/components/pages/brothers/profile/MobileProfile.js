import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import ProfileSingle from './ProfileSingle'
import ProfileArray from './ProfileArray'


export default function MobileProfile({name, profile, classes}) {
    return (
        <div className={classes.root}>
            <Box mt={4} mb={6} className={classes.paragraph}>
               
                <Grid container direction="column" justify="center">
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
                    <Grid item>
                        <img className={classes.mobileimg} alt={name} src={profile["img"]} />
                    </Grid>
                </Grid>
                
                <Box mt={4}>
                    <Grid container direction="row" spacing={2} >
                        <Grid item xs={6}>
                            <Typography component="div">
                                <ProfileSingle profile={profile} field="major" title="Major" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="minor" title="Minor" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="emphasis" title="Emphasis" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="practice" title="Practice" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="class" title="Class" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="gradYear" title="Graduation Year" isMobile={true}></ProfileSingle>
                                <ProfileArray profile={profile} field="interests" title="Interests" isMobile={true}></ProfileArray>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography component="div">
                                <ProfileArray profile={profile} field="experience" title="Work Experience" isMobile={true}></ProfileArray>
                                <ProfileArray profile={profile} field="campusInvolvements" title="Campus Involvements" isMobile={true}></ProfileArray>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {profile["whyLPN"] !== "" &&
                    <Box mt={4}>
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
