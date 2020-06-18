import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './brothers.css'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
    },
    image: {
        height: "90%",
        width: "90%",
        objectFit: "contain"
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

    const nameToPath = (name) => {
        const path = name.toLowerCase().replace(/ +/g, '-')
        return '/active-brothers/' + path
    }

    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                {brothers.map((tile) => (
                    <Grid item xs={3}>                   
                        
                        <div class={"content"}>
                            <Link to={nameToPath(tile.name)}>
                                <img src={tile.img} alt={tile.title} className={classes.image} />
                                
                                <div class="content-overlay"></div>

                                <div class="content-details fadeIn-bottom">
                                    <div>
                                        {tile.name} {tile.title}
                                    </div>
                                </div>
                            </Link>
                        </div>
                       
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}
