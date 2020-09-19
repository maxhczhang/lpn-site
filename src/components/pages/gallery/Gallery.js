import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
import Box from '@material-ui/core/Box';

import { GalleryPhotos } from './GalleryPhotos';
import useWindowDimensions from '../../WindowListener';


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
    bar: {
        height: 40
    },
    image: {
        pointerEvents: "none",
        transition: 'transform .2s',
        '&:hover': {
            transform: "scale(1.1)"
        }
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
            <GridList cellHeight={300} className={classes.gridList} cols={3} spacing={20}>
                {GalleryPhotos.map((tile, i) => (
                    <GridListTile key={i} cols={isMobile ? 3 : tile.cols} rows={isMobile ? 1 : tile.rows}
                             className={classes.image} >
                        <img src={tile.img} alt={tile.title}/>

                        {/* {tile.title &&
                            <GridListTileBar
                                classes={{ root:classes.bar, }}
                                title={tile.title}
                            />
                        }  */}
                    </GridListTile>
                ))}
            </GridList>
        </Box>
    )
}
