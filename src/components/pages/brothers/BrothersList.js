import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styles from './brothers.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        maxWidth: "80%",
    },
    image: {
        height: "40vh",
        width: "30vh",
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


export default function BrothersList({ brothers }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="space-evenly">
                {brothers.map((tile) => (
                    <Grid item className={classes.gridItem}>
                        {/* <div className={classes.brother} onClick={() => goToAbout(tile.name)}> */}
                        <div className={classes.brother}>
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

        </div>
    )
}
