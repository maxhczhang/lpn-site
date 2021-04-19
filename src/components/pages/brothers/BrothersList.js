import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
    name: {
        textTransform: "uppercase"
    }
}));

const nameToPath = (name) => {
    const path = name.toLowerCase().replace(/ +/g, '-')
    return '/active-brothers/' + path
}


const BrothersList = ({ brothers, scrollPosition, width, height }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>

            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                {brothers.map((tile, i) => (
                    <Grid item key={i}>                   
                        
                        <div className="content" style={{width:width}}>
                            <Link to={nameToPath(tile.name)}>
                                <LazyLoadImage
                                    key={i}
                                    alt={tile.name}
                                    width={width}
                                    height={height}
                                    scrollPosition={scrollPosition}
                                    src={tile.img}
                                    effect="blur"
                                />
                                
                                <div className="content-overlay"></div>

                                <div className="content-details fadeIn-bottom">
                                    <div>{tile.title}</div>
                                    {/* <p>{tile.title}</p> */}
                                    {tile.logo && 
                                        <img src={tile.logo} width={tile.width} alt={tile.company}></img>
                                    }
                                </div>
                                
                            </Link>
                        </div>

                        <Typography component="div">
                            <Box mt={1} letterSpacing={2} fontSize={14} className={classes.name}>
                                {tile.name}
                            </Box>
                            {/* <Box mt={1} letterSpacing={2} fontSize={11} className={classes.name}>
                                {tile.title}
                            </Box> */}
                        </Typography>
                        
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default trackWindowScroll(BrothersList);
