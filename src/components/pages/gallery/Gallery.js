import React, {useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Box from '@material-ui/core/Box';

import {GalleryPhotos} from './GalleryPhotos'
import useWindowDimensions from '../../WindowListener'


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

    const { height, width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box className={classes.root} mt={8} mb={8}>
            <GridList cellHeight={300} className={classes.gridList} cols={3} spacing={20}>
                {GalleryPhotos.map((tile) => (
                    <GridListTile key={tile.img} cols={isMobile ? 3 : (tile.cols || 1)} style={{ pointerEvents: "none" }}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </Box>
    )
}
