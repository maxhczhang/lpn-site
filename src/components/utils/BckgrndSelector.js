import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

import Header from '../layouts/Header/Header'
import HeaderContent from '../layouts/Header/HeaderContent'
import Home from '../../assets/backgrounds/Home.jpg'
import About from '../../assets/backgrounds/About.jpg'
import CampusInvolvements from '../../assets/backgrounds/CampusInvolvements.jpeg'
import Careers from '../../assets/backgrounds/Careers.jpeg'
import Gallery from '../../assets/backgrounds/Gallery.jpg'
import useWindowDimensions from './WindowListener';


export default function BckgrndSelector({ pageNum }) {
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    switch(pageNum) {

        // Home
        case 0:
            return (
                <ParallaxBanner
                    style={{
                        height: "100vh"
                    }}
                    layers={[
                        {
                            image: `url(${Home})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${Home})`,
                                }
                            },
                        },
                    ]}
                >
                  <Header pageNum={pageNum}></Header>
                  <HeaderContent pageNum={pageNum}></HeaderContent> 
                </ParallaxBanner>
            )
        
        // About
        case 1:
            return (
                <ParallaxBanner
                    style={{
                        height: "100vh"
                    }}
                    layers={[
                        {
                            image: `url(${About})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${About})`,
                                    backgroundPosition: "center bottom"
                                }
                            },
                        },
                    ]}
                >
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        // Active Brothers
        case 2:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

        // Campus Involvements
        case 3:
            return (
                <ParallaxBanner
                    style={{
                        height: "75vh",
                        
                    }}
                    layers={[
                        {
                            image: `url(${CampusInvolvements})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${CampusInvolvements})`,
                                    backgroundPosition: "center top"
                                }
                            },
                        },
                    ]}
                >
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )


        // Careers
        case 4:
            return (
                <ParallaxBanner
                    style={{
                        height: "75vh"
                    }}
                    layers={[
                        {
                            image: `url(${Careers})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${Careers})`,
                                    backgroundPosition: "center top"
                                }
                            },
                        },
                    ]}
                >
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        // Recruitment
        case 5:
            return (
                <ParallaxBanner
                    style={isMobile ? {height: "40vh"} : {height: "73vh"}}
                 
                    layers={[
                        {
                            amount: 0.2,
                            children: 
                            <iframe width="100%" height="100%" title="Rush Video" src="https://www.youtube-nocookie.com/embed/8MgFYLCZnS4?playlist=8MgFYLCZnS4&loop=1&autoplay=1&mute=1&vq=hd1080&controls=0" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={isMobile ? {} : { pointerEvents: "none" }}></iframe>
                        },
                    ]}
                >
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        // FAQs
        case 6:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

        // Gallery
        case 7:
            return (
                <ParallaxBanner
                    style={{
                        height: "100vh"
                    }}
                    layers={[
                        {
                            image: `url(${Gallery})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${Gallery})`,
                                    backgroundPosition: "center bottom"
                                }
                            },
                        },
                    ]}
                >
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        // Contact
        case 8:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

        // Individual Profile Pages
        case 9:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )
        
        // Any other page (we should never reach here)
        default:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )
    }
}
