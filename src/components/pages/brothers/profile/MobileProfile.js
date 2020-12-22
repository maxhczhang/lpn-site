import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import ProfileSingle from './ProfileSingle'
import ProfileArray from './ProfileArray'


export default function MobileProfile({name, profile, classes}) {
    return (
        <div className={classes.root}>
            <Box mt={8} mb={10} style={{maxWidth: "80%"}}>
               
                <Grid container direction="column" justify="center">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" mb={1}>
                                {name}
                            </Box>
                            <Box fontSize="h4.fontSize" mb={4}>
                                {profile['class']} Class
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <img className={classes.mobileimg} alt={name} src={profile["img"]} />
                    </Grid>
                </Grid>
                
                <Box mt={6}>
                    <Grid container direction="row" spacing={5} >
                        <Grid item xs={6}>
                            <Typography component="div">
                                <ProfileSingle profile={profile} field="major" title="Major" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="minor" title="Minor" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="emphasis" title="Emphasis" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="practice" title="Practice" isMobile={true}></ProfileSingle>
                                <ProfileSingle profile={profile} field="year" title="Year" isMobile={true}></ProfileSingle>
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

                <Box mt={5}>
                    <a href={profile["linkedIn"]} target="_blank" rel="noopener noreferrer" className={classes.link}>
                        <Button size="large" variant="contained" className={classes.button}>
                            Connect on LinkedIn
                        </Button>
                    </a>
                </Box>

                {profile["whyLPN"] !== "" &&
                    <Box mt={6}>
                        <Typography component="div">
                            <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                Why ΛΦΝ?
                            </Box>
                            <Box fontStyle="italic" fontSize="h6.fontSize" mt={1}>
                                "{profile["whyLPN"]}"
                            </Box>
                        </Typography>
                    </Box>
                }
            </Box>

        </div>
    )
}
