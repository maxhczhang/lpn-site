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
    // content: {
    //     position: "relative",
    //     width: "100%",
    //     height: "auto",
    //     margin: "auto",
    //     overflow: "hidden"
    // },
    // content__content_overlay: {
    //     background: "rgba(0,0,0,0.7)",
    //     position: "absolute",
    //     height: "99%",
    //     width: "100%",
    //     left: "0",
    //     top: "0",
    //     bottom: "0",
    //     right: "0",
    //     opacity: "0",
    //     WebkitTransition: "all 0.4s ease-in-out 0s",
    //     MozTransition: "all 0.4s ease-in-out 0s",
    //     transition: "all 0.4s ease-in-out 0s"
    // },
    // content_hover__content_overlay: {
    //     opacity: "1"
    // },
  
    // content_details: {
    //     position: "absolute",
    //     textAlign: "center",
    //     paddingLeft: "1em",
    //     paddingRight: "1em",
    //     width: "100%",
    //     top: "50%",
    //     left: "50%",
    //     opacity: "0",
    //     WebkitTransform: "translate(-50%, -50%)",
    //     MozTransform: "translate(-50%, -50%)",
    //     transform: "translate(-50%, -50%)",
    //     WebkitTransition: "all 0.3s ease-in-out 0s",
    //     MozTransition: "all 0.3s ease-in-out 0s",
    //     transition: "all 0.3s ease-in-out 0s"
    // },
    // content_hover__content_details: {
    //     top: "50%",
    //     left: "50%",
    //     opacity: "1"
    // },
   
    // content_details_div: {
    //     color: "#fff",
    //     fontWeight: "bold",
    //     fontSize: "1em",
    //     fontFamily: "\"Roboto\""
    // },
    // content_details_p: {
    //     color: "#fff",
    //     fontSize: "0.8em"
    // },
    // fadeIn_bottom: {
    //     top: "80%"
    // },
    // fadeIn_top: {
    //     top" "20%"
    // },
    // fadeIn_left: {
    //     left: "20%"
    // },
    // fadeIn_right: {
    //     left: "80%"
    // }
}));


const BrothersList = ({ brothers, isCsuite, scrollPosition }) => {
    const classes = useStyles();
    let cols;

    const { width } = useWindowDimensions();
    const isMobile = width < 700;

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
                        
                        <div className="content">
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
                                
                                <div className="content-overlay"></div>

                                <div className="content-details fadeIn-bottom">
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
