import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';

import Header from '../layouts/Header/Header'
import HeaderContent from '../layouts/Header/HeaderContent'
import buildings from '../../static/images/backgrounds/buildings.jpg'
import seniors from '../../static/images/backgrounds/seniors.jpg'
import lpn_in_park from '../../static/images/backgrounds/lpn_in_park.jpg'
import Careers_Background from '../../static/images/backgrounds/Careers_Background.jpg'
import Gallery_Seniors from '../../static/images/backgrounds/Gallery_Seniors.jpg'
import EYInterviews from '../../static/images/home/darkenedEYInterviews.jpeg'


export default function BckgrndSelector({ pageNum }) {

    switch(pageNum) {
        case 0:
            return (
                <ParallaxBanner
                    style={{
                        height: "100vh"
                    }}
                    layers={[
                        {
                            image: `url(${buildings})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${buildings})`,
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
                            image: `url(${seniors})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${seniors})`,
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
                            image: `url(${lpn_in_park})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${lpn_in_park})`,
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
                            image: `url(${EYInterviews})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${EYInterviews})`,
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
                    style={{
                        height: "75vh",
                    }}
                    layers={[
                        {
                            amount: 0.2,
                            children: 
                                <iframe width="100%" height="100%" title="Rush Video"
                                    src="https://www.youtube-nocookie.com/embed/ZEza9AuQ2Q8?playlist=ZEza9AuQ2Q8&loop=1&autoplay=1&mute=1"
                                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                                    style={{pointerEvents: "none"}}
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
                            image: `url(${Gallery_Seniors})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${Gallery_Seniors})`,
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
                <React.Fragment></React.Fragment>
            )
    }
}
