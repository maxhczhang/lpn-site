import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { companyLogos } from './lists/CompanyLogos';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        maxWidth: "80%"
    },
    image: {
        width: 250,
        height: 150,
        objectFit: 'scale-down',
    },
    mobileImage: {
        width: 130,
        height: 54,
        objectFit: 'scale-down',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function Companies({isMobile}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                {companyLogos.map((tile) => (
                    <Grid item xs key={tile.img}>
                        <img src={tile.img} alt={tile.title} className={isMobile ? classes.mobileImage : classes.image} />
                    </Grid>
                ))}
            </Grid>
            
        </div>
    )
}
