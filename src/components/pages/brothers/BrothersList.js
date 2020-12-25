import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
// import useWindowDimensions from '../../WindowListener'

import './brothers.css'
import 'react-lazy-load-image-component/src/effects/blur.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        textAlign: "center",
        maxWidth: "85%"
    },
}));


const BrothersList = ({ brothers, scrollPosition }) => {
    const classes = useStyles();
    // let cols;

    // const { width } = useWindowDimensions();
    // const isMobile = width < 700;

    // if (isMobile) {
    //     cols = 12;
    // } else {
    //     cols = 3;
    // }

    const nameToPath = (name) => {
        const path = name.toLowerCase().replace(/ +/g, '-')
        return '/active-brothers/' + path
    }

    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                {brothers.map((tile, i) => (
                    <Grid item xs key={i}>                   
                        
                        <div className="content">
                            <Link to={nameToPath(tile.name)}>
                                <LazyLoadImage
                                    key={i}
                                    alt={tile.name}
                                    width={218}
                                    height={330}
                                    scrollPosition={scrollPosition}
                                    src={tile.img}
                                    effect="blur"
                                />
                                
                                <div className="content-overlay"></div>

                                <div className="content-details fadeIn-bottom">
                                    <div>{tile.name}</div>
                                    <p>{tile.title}</p>
                                    {tile.logo && 
                                        <img src={tile.logo} width={tile.width} alt={tile.company}></img>
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
