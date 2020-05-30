import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';

import Header from '../layouts/Header/Header'
import HeaderContent from '../layouts/Header/HeaderContent'

import buildings from '../../static/images/buildings.jpg'
import seniors from '../../static/images/seniors.jpg'
import merage_at_night from '../../static/images/merage_at_night.jpg'


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
