import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {companyLogos} from './CompanyLogos';

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    image: {
        float: "left",
        width: 250,
        height: 150,
        objectFit: 'scale-down',
        // backgroundColor: 'rgb(0,0,0,0.5)'
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

export default function Companies() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={6}>
                {companyLogos.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} className={classes.image}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
        //centerMode flag
        // <Carousel autoPlay centerMode centerSlidePercentage={50} infiniteLoop showStatus={false} showThumbs={false}
        //     showIndicators={false} showArrows={false}>
            
        //     {companyLogos.map((tile) => (
        //         <div key={tile.img} >
        //             <img src={tile.img} alt={tile.title} className={classes.image}></img>
        //         </div>
        //     ))}

        // </Carousel>
    )
}
