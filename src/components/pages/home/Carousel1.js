import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { carousel1photos } from './lists/Carousel1Photos';


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

export default function Carousel1({isMobile}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={isMobile ? 1 : 3} cellHeight={250}>
                {carousel1photos.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} className={classes.image} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
