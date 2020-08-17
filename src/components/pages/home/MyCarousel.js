import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        maxWidth: "80%"
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
}));

export default function MyCarousel({isMobile, photos, spacing}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={isMobile ? 1 : 3} cellHeight={250} spacing={spacing}>
                {photos.map((tile, i) => (
                    <GridListTile key={i}>
                        <img src={tile.img} alt={tile.title} className={classes.image} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
