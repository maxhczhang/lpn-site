import React, {useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@material-ui/core/Box';

import {GalleryPhotos} from './GalleryPhotos'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        alignItems: 'center',
    },
    gridList: {
        width: "80%",
    },
}));

export default function Gallery({setPage}) {
    useEffect(() => {
        setPage("Gallery")
    });

    const classes = useStyles();

    return (
        <Box className={classes.root} mt={6} mb={6}>
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                {GalleryPhotos.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1} style={{ pointerEvents: "none" }}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </Box>
    )
}
