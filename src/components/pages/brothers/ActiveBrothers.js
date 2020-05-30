import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { csuite } from './csuite';

import styles from './brothers.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center"
    },
    image: {
        height: "35vh",
        width: "25vh",
        objectFit: "contain"
    },
    gridItem: {
        cursor: "pointer",
    },
    brother: {
        padding: theme.spacing(2)
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function ActiveBrothers({ setPage }) {
    useEffect(() => {
        setPage("Active Brothers")
    });

    const classes = useStyles();
    const [isAboutMe, setAboutMe] = useState(0);
    const [brother, setBrother] = useState('');
   
    const goToAbout = (name) => {
        setAboutMe(1);
        setBrother(name)
    }

    return (
        <div className={classes.root}>
            <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" mt={6} mb={2}>
                C-Suite
            </Box>

            <Grid container direction="row" justify="center" alignItems="space-evenly">
                {csuite.map((tile) => (
                    <Grid item className={classes.gridItem}>
                        <div className={classes.brother} onClick={() => goToAbout(tile.name)}>

                            <div class={"content"}>
                                <img src={tile.img} alt={tile.title} className={classes.image} />
                                <div class="content-overlay"></div>
                                
                                <div class="content-details fadeIn-bottom">
                                    <div>
                                        {tile.name} - {tile.title}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>

            <Box fontWeight="fontWeightBold" fontSize="h2.fontSize" mt={6} mb={2}>
                Directors
            </Box>

        </div>
    )
}
