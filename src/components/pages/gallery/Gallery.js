import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Box from '@material-ui/core/Box';

import { GalleryPhotos } from './GalleryPhotos';
import useWindowDimensions from '../../utils/WindowListener';


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
    image: {
        pointerEvents: "none",
    },
}));


export default function Gallery({setPage}) {
    useEffect(() => {
        setPage("Gallery")
    });

    const classes = useStyles();
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    return (
        <Box className={classes.root} mt={18} mb={18}>
            <ImageList rowHeight={300} className={classes.gridList} cols={3} gap={20}>
                {GalleryPhotos.map((tile, i) => (
                    <ImageListItem key={i} cols={isMobile ? 3 : tile.cols} rows={isMobile ? 1 : tile.rows}
                        className={classes.image}>
                        <img src={tile.img} alt={tile.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}
