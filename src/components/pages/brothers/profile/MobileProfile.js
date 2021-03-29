import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import ProfileSingle from './ProfileSingle'
import ProfileArray from './ProfileArray'
import ProfileObject from './ProfileObject'


export default function MobileProfile({name, profile, classes}) {
    return (
        <Box mt={8} mb={10} className={classes.root}>
            
            <Grid container justify="center">
            
                <Grid item xs={12}>
                    <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" mb={1}>
                        {name}
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box fontSize="h4.fontSize" mb={4}>
                        {profile['class']} Class
                    </Box>
                </Grid>
                
                <Grid item xs={12}>
                    <img className={classes.mobileimg} alt={name} src={profile["img"]} />
                </Grid>
        
            </Grid>
            
            <Box mt={4}></Box>
            <Divider className={classes.divider}></Divider>
            <Box mt={4}></Box>
                
            <Typography component="div" className={classes.paragraph}>
                <Grid container direction="row" justify="align-start" spacing={2}>

                    <Grid item xs={6}>
                        <ProfileSingle data={profile["year"]} title="Year" isMobile={true}></ProfileSingle>
                        <ProfileSingle data={profile["major"]} title="Major" isMobile={true}></ProfileSingle>
                        <ProfileSingle data={profile["minor"]} title="Minor" isMobile={true}></ProfileSingle>
                        <ProfileSingle data={profile["emphasis"]} title="Emphasis" isMobile={true}></ProfileSingle>
                        <ProfileSingle data={profile["practice"]} title="Practice" isMobile={true}></ProfileSingle>
                    </Grid>

                    {profile["interests"] !== "" && 
                        <Grid item xs={6}>
                            <ProfileArray data={profile["interests"]} title="Interests" isMobile={true}></ProfileArray>
                        </Grid>
                    }
                   
                    {profile["experience"] !== "" &&
                        <Grid item xs={6}>
                            <ProfileObject data={profile["experience"]} title="Experience" isMobile={true}></ProfileObject>
                        </Grid>
                    }

                    <Grid item xs={6}>
                        <ProfileObject data={profile["campusInvolvements"]} title="Involvement" isMobile={true}></ProfileObject>
                    </Grid>

                </Grid>
            </Typography>
            
            <Box mt={5}>
                <a href={profile["linkedIn"]} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    <Button size="large" variant="contained" className={classes.button}>
                        Connect on LinkedIn
                    </Button>
                </a>
            </Box>

            {profile["whyLPN"] &&
                <Box className={classes.paragraph} mt={6}>
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
    )
}
