import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';

import Header from '../layouts/Header/Header'
import HeaderContent from '../layouts/Header/HeaderContent'

import buildings from '../../static/images/backgrounds/buildings.jpg'
import seniors from '../../static/images/backgrounds/seniors.jpg'
import lpn_in_park from '../../static/images/backgrounds/lpn_in_park.jpg'
import merage_at_night from '../../static/images/merage_at_night.jpg'
import Careers_Background from '../../static/images/backgrounds/Careers_Background.jpg'


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
                  <Header></Header>
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
                                }
                            },
                        },
                    ]}
                >
                    <Header></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        case 2:
            return (
                <React.Fragment>
                    <Header></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )

        case 3:
            return (
                <ParallaxBanner
                    style={{
                        height: "50vh"
                    }}
                    layers={[
                        {
                            image: `url(${lpn_in_park})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${lpn_in_park})`,
                                }
                            },
                        },
                    ]}
                >
                    <Header></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        case 4:
            return (
                <ParallaxBanner
                    style={{
                        height: "50vh"
                    }}
                    layers={[
                        {
                            image: `url(${Careers_Background})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${Careers_Background})`,
                                }
                            },
                        },
                    ]}
                >
                    <Header></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )

        case 10:
            return (
                <React.Fragment>
                    <Header></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </React.Fragment>
            )
        
        default:
            return (
                <ParallaxBanner
                    style={{
                        height: "50vh"
                    }}
                    layers={[
                        {
                            image: `url(${merage_at_night})`,
                            amount: 0.2,
                            props: {
                                style: {
                                    backgroundImage: `url(${merage_at_night})`,
                                }
                            },
                        },
                    ]}
                >
                    <Header></Header>
                    <HeaderContent pageNum={pageNum}></HeaderContent>
                </ParallaxBanner>
            )
    }
}
