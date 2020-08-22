import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import useWindowDimensions from '../../WindowListener'

import './brothers.css'
import 'react-lazy-load-image-component/src/effects/blur.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        maxWidth: "80%"
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    logo: {
        width: 50,
        height: 50
    },
    rectLogo: {
        width: 90,
        height: 45
    },
    longRectLogo: {
        width: 160,
        height: 27
    },
    smallLogo: {
        width: 80,
        height: 80
    },
    threeToOne: {
        width: 120,
        height: 40
    }
}));


const BrothersList = ({ brothers, isCsuite, scrollPosition }) => {
    const classes = useStyles();
    let cols;

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    if (isMobile) {
        cols = 12;
    } else {
        cols = 3;
    }

    const nameToPath = (name) => {
        const path = name.toLowerCase().replace(/ +/g, '-')
        return '/active-brothers/' + path
    }

    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                {brothers.map((tile, i) => (
                    <Grid item xs={cols} key={i}>                   
                        
                        <div className="content">
                            <Link to={nameToPath(tile.name)}>
                                <LazyLoadImage
                                    key={i}
                                    alt={tile.name}
                                    width={200}
                                    height={300}
                                    scrollPosition={scrollPosition}
                                    src={tile.img}
                                    effect="blur"
                                />
                                
                                <div className="content-overlay"></div>

                                <div className="content-details fadeIn-bottom">
                                    <div>{tile.name}</div>
                                    <p>{tile.title}</p>
                                    {tile.logo && 
                                        <img src={tile.logo} className={tile.isRect ? classes.rectLogo : tile.isLongRect 
                                            ? classes.longRectLogo : tile.isSmall ? classes.smallLogo : 
                                            tile.isThreeToOne ? classes.threeToOne : classes.logo} 
                                            alt={tile.company}></img>
                                    }
                                </div>
                            </Link>
                        </div>
                       
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default trackWindowScroll(BrothersList);
