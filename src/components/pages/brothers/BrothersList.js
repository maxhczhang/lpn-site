import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import { isMobile } from 'react-device-detect';

import './brothers.css'
import 'react-lazy-load-image-component/src/effects/blur.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        maxWidth: "70%"
    },
    image: {
        height: "100%",
        width: "100%",
        objectFit: "contain"
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));


const BrothersList = ({ brothers, isCsuite, scrollPosition }) => {
    const classes = useStyles();
    let cols;

    if (isMobile) {
        cols = 6;
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
                        
                        <div class={"content"}>
                            <Link to={nameToPath(tile.name)}>
                                {/* <img src={tile.img} alt={tile.title} className={classes.image} /> */}
                                <LazyLoadImage
                                    key={i}
                                    alt={tile.name}
                                    height="auto"
                                    width="100%"
                                    scrollPosition={scrollPosition}
                                    src={tile.img}
                                    effect="blur"
                                    // visibleByDefault={isCsuite && i < 4}
                                    // afterLoad={() => {console.log(tile.name + " loaded")}}
                                />
                                
                                <div class="content-overlay"></div>

                                <div class="content-details fadeIn-bottom">
                                    <div>
                                        {tile.name} {tile.title}
                                    </div>
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
