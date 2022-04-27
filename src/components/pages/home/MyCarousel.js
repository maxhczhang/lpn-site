import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


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
            <ImageList className={classes.gridList} cols={isMobile ? 1 : 3} cellHeight={250} spacing={spacing}>
                {photos.map((tile, i) => (
                    <ImageListItem key={i}>
                        <img src={tile.img} alt={tile.title} className={classes.image} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}
