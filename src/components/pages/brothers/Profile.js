import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {directorProfiles} from './lists/directorProfiles'

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    img: {
        width: "50%",
        height: "40%",
    },
    link: {
        color: "#003273"
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
    const profile = directorProfiles[_name]

    return (
        <Box m={6}>
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                
                <Grid item xs={12} sm container direction="row" spacing={2}>
                    <Grid item xs>
                        <div>
                            <img className={classes.img} alt="complex" src={profile["img"]}/>
                        </div>

                        <Grid item xs={12} direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                                    {name}
                                </Box>
                            </Grid>
                            <Grid item>
                                <a href={profile["linkedIn"]} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                    <IconButton size="medium" aria-label="LinkedIn" color="inherit">
                                        <LinkedInIcon></LinkedInIcon>
                                    </IconButton>
                                </a>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                
                <Grid item xs={12} sm container direction="row" spacing={2}>
                    
                    <Grid item xs={6} container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Major
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["major"]}
                                </Box>

                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Practice
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["practice"]}
                                </Box>

                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Class
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["class"]}
                                </Box>

                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Graduation Year
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["gradYear"]}
                                </Box>

                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Interests
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["interests"].map((exp) => <li>{exp}</li>)}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={6} container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography>
                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                                    Work Experience
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["experience"].map((exp) => <li>{exp}</li>)}
                                </Box>

                                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" mt={1}>
                                    Campus Involvements
                                </Box>
                                <Box fontSize="h6.fontSize">
                                    {profile["campusInvolvement"].map((exp) => <li>{exp}</li>)}
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

            <Box mt={2}>
                <Typography>
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                        Why ΛΦΝ?
                    </Box>
                    <Box fontStyle="italic">
                        "{profile["whyLPN"]}"
                    </Box>
                </Typography>
            </Box>
        </Box>
    )
}
