import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';

import Header from '../layouts/Header/Header'
import HeaderContent from '../layouts/Header/HeaderContent'
import Home from '../../assets/backgrounds/Home.jpg'
import About from '../../assets/backgrounds/About.jpg'
import CampusInvolvements from '../../assets/backgrounds/CampusInvolvement.jpg'
import Careers from '../../assets/backgrounds/Careers.jpeg'
import Gallery from '../../assets/backgrounds/Gallery.jpg'

import useWindowDimensions from '../WindowListener';


export default function BckgrndSelector({ pageNum }) {
    const { width } = useWindowDimensions();
    const isMobile = width < 700;

    switch(pageNum) {
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

        case 2:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

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

        case 5:
            return (
                <ParallaxBanner
                    
                    style={isMobile ? {height: "40vh"} : {height: "73vh"}}
                 
                    layers={[
                        {
                            amount: 0.2,
                            children: 
                                <iframe width="100%" height="100%" title="Rush Video"
                                    src="https://www.youtube-nocookie.com/embed/gKH6xj1xg3U?playlist=gKH6xj1xg3U&loop=1&autoplay=1&mute=1&vq=hd720&controls=0"
                                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                    style={isMobile ? {} : {pointerEvents: "none"}}
                                >
                                </iframe>
                        },
                    ]}
                >
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        case 6:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

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

        case 8:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

        case 9:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

        case 10:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )
        
        default:
            return (
                <React.Fragment>
                    <Header pageNum={pageNum}></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )
    }
}
